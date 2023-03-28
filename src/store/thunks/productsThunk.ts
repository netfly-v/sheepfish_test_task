import {toast} from 'react-toastify';
import {productsAPI} from '../../api/products';
import {getAllProducts, searchProducts, addProduct, deleteProduct} from '../state/products/actions';
import {Dispatch} from 'redux';
import {ProductsActionType} from '../state/products/types';
import {FormDataType} from '../../constants/types';

type DispatchType = Dispatch<ProductsActionType>;

export const getAllProductsThunk = () => (dispatch: DispatchType) => {
  productsAPI.getAllProducts().then((products) => dispatch(getAllProducts(products.products)));
};

export const searchProductThunk = (q: string) => (dispatch: DispatchType) => {
  productsAPI.searchProduct(q).then((products) => dispatch(searchProducts(products.products)));
};

export const addProductThunk = (formData: FormDataType) => (dispatch: DispatchType) => {
  productsAPI.addProduct(formData).then((product) => {
    dispatch(addProduct(product));
    toast.success('Product added successfully!');
  });
};

export const deleteProductThunk = (id: number) => (dispatch: DispatchType) => {
  productsAPI.deleteProduct(id).then((product) => {
    dispatch(deleteProduct(product));
    toast.info('Product deleted successfully!');
  });
};
