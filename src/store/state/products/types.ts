import {FormDataType, Product} from '../../../constants/types';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export type ProductsType = {allProducts: Product[]};

type GetAllProductsType = {
  type: typeof GET_ALL_PRODUCTS;
  products: ProductsType;
};

type SearchProductsType = {
  type: typeof SEARCH_PRODUCTS;
  products: ProductsType;
};

type AddProductType = {
  type: typeof ADD_PRODUCT;
  product: FormDataType;
};

type DeleteProductType = {
  type: typeof DELETE_PRODUCT;
  product: Product;
};

export type ProductsActionType = GetAllProductsType | SearchProductsType | AddProductType | DeleteProductType;
