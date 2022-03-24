import {createStore, combineReducers} from 'redux';
import ProductsReducers from "./ProductsReducers"
import CartReducer from './CartReducer';
import { devToolsEnhancer } from "redux-devtools-extension";

const root =combineReducers({
    ProductsReducers, CartReducer
});

const store = createStore(
  root,
  devToolsEnhancer()
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
