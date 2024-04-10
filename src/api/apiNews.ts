import axios from 'axios';
import { CategoriesApiResponse, NewsApiResponse, ParamsType } from '../interfaces';

const BASE_URL = 'https://api.currentsapi.services/v1/';
const API_KEY = 'Cqo_bu_OTaec9N5DWJpbvACqY06Vv4qTfZlO4rTz5wD4inl6';

enum Status {
  Error = 'error',
  Ok = 'ok'
}



export const getNews = async (params?: ParamsType ) : Promise<NewsApiResponse> => {
  try {
    const {
      page_number = 1,
      page_size = 10,
      category,
      keywords
    } = params || {};

    const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
    return {news: [], page: 1, status: Status.Error}
  }
}


export const getLastNews = async () : Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);

    return {news: [], page: 1, status: Status.Error}
  }
}

export const getCategories = async () : Promise<CategoriesApiResponse> => {
  try {
    const response = await axios.get<CategoriesApiResponse>(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);

    return {categories: [], description: '', status: Status.Error}
  }
}