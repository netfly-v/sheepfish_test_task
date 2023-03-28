import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import logger from 'redux-logger';
import {productsReducer} from './state/products';
import {categoriesReducer} from './state/categories';

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<AppStateType, any, AnyAction>;
export type GetStateType = () => AppStateType;

const reducers = combineReducers({
  productsDomain: productsReducer,
  categoriesDomain: categoriesReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));
