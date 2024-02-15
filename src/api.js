import axios from 'axios';

const accessKey = 'wAKBNb7g1ILdt2YjcIBSBkyq-K0hnbtcOtqOJ4pZAwU';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (query, page, per_page = 12) => {
  const response = await axios.get(
    `/search/photos?client_id=${accessKey}&query=${query}&page=${page}&per_page=${per_page}`
  );

  return response.data;
};
