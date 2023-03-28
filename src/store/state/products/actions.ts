import {FormDataType, Product} from '../../../constants/types';
import {
  ADD_PRODUCT,
  GET_ALL_PRODUCTS,
  ProductsActionType,
  ProductsType,
  SEARCH_PRODUCTS,
  DELETE_PRODUCT,
} from './types';

export const getAllProducts = (products: ProductsType): ProductsActionType => ({type: GET_ALL_PRODUCTS, products});
export const searchProducts = (products: ProductsType): ProductsActionType => ({type: SEARCH_PRODUCTS, products});
export const addProduct = (product: FormDataType): ProductsActionType => ({type: ADD_PRODUCT, product});
export const deleteProduct = (product: Product): ProductsActionType => ({type: DELETE_PRODUCT, product});
