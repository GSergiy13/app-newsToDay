import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { newsApi } from './services/newsApi'
import newsReducer from './slice/newsSlice'
import themeReducer from './slice/themeSlice'

export const store = configureStore({
	reducer: {
		news: newsReducer,
		theme: themeReducer,
		[newsApi.reducerPath]: newsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(newsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
