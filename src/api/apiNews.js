import axios from 'axios';

const BASE_URL = 'https://api.currentsapi.services/v1/';
const API_KEY = 'Cqo_bu_OTaec9N5DWJpbvACqY06Vv4qTfZlO4rTz5wD4inl6';

export const getNews = async (page_number, size_page) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number: page_number,
        page_size: size_page
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
}