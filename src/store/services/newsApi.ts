import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	CategoriesApiResponse,
	NewsApiResponse,
	ParamsType,
} from '../../interfaces'

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const newsApi = createApi({
	reducerPath: 'newsApi',
	keepUnusedDataFor: 60 * 60,
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		getNews: builder.query<NewsApiResponse, ParamsType>({
			query: params => {
				const {
					page_number = 1,
					page_size = 10,
					category,
					keywords,
				} = params || {}

				return {
					url: 'search',
					params: {
						apiKey: API_KEY,
						page_number,
						page_size,
						category,
						keywords,
					},
				}
			},
		}),
		getLastNews: builder.query<NewsApiResponse, null>({
			query: () => {
				return {
					url: 'latest-news',
					params: {
						apiKey: API_KEY,
					},
				}
			},
		}),
		getCategories: builder.query<CategoriesApiResponse, null>({
			query: () => {
				return {
					url: 'available/categories',
					params: {
						apiKey: API_KEY,
					},
				}
			},
		}),
	}),
})

export const { useGetNewsQuery, useGetLastNewsQuery, useGetCategoriesQuery } =
	newsApi
