import React from 'react';
import {Route, Routes as Switch} from 'react-router-dom';
import AddProductPage from './components/AddProduct';
import MainPage from './components/Main';
import {ProductPage} from './components/Product';
import {route} from './constants/route';

const PublicRoutes = [
  <Route key="main" path={'*'} element={<MainPage />} />,
  <Route key="product" path={route.product} element={<ProductPage />} />,
  <Route key="category" path={route.category} element={<MainPage />} />,
  <Route key="addProduct" path={route.addProduct} element={<AddProductPage />} />,
];

const Routes: React.FC = () => {
  return <Switch>{PublicRoutes}</Switch>;
};

export default Routes;
