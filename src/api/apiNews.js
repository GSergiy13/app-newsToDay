import axios from 'axios';

const BASE_URL = 'https://api.currentsapi.services/v1/';
const API_KEY = 'Cqo_bu_OTaec9N5DWJpbvACqY06Vv4qTfZlO4rTz5wD4inl6';

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
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
  }
}


export const getLastNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}