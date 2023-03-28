import {Product} from '../../../constants/types';
import {GET_ALL_PRODUCTS, SEARCH_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, ProductsActionType} from './types';

const initialState = {
  allProducts: [],
};

export const productsReducer = (state = initialState, action: ProductsActionType) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {...state, allProducts: action.products};
    case SEARCH_PRODUCTS:
      return {...state, allProducts: action.products};
    case ADD_PRODUCT:
      return {...state, allProducts: [...state.allProducts, action.product]};
    case DELETE_PRODUCT:
      return {...state, allProducts: [...state.allProducts.filter((p: Product) => p.id !== action.product.id)]};
    default:
      return state;
  }
};
