import axios from 'axios';
import {API_URL} from '../constants/common';
import {FormDataType} from '../constants/types';

export const productsAPI = {
  getAllProducts(category?: string) {
    return axios.get(`${API_URL}/products${category ? `/category/${category}` : ''}`).then((response) => response.data);
  },
  getProduct(id: string) {
    return axios.get(`${API_URL}/products/${id}`).then((response) => response.data);
  },
  addProduct(formData: FormDataType) {
    return axios.post(`${API_URL}/products/add`, formData).then((response) => response.data);
  },
  updateProduct(id: number) {
    return axios.put(`${API_URL}/products/${id}`).then((response) => response.data);
  },
  deleteProduct(id: number) {
    return axios.delete(`${API_URL}/products/${id}`).then((response) => response.data);
  },
  searchProduct(q: string) {
    return axios.get(`${API_URL}/products/search?q=${q}`).then((response) => response.data);
  },
};
