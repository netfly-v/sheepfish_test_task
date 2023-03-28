import axios from 'axios';
import {API_URL} from '../constants/common';

export const categoriesAPI = {
  getCategories() {
    return axios.get(`${API_URL}/products/categories`).then((response) => response.data);
  },
};
