import {createStore, combineReducers} from 'redux';
import ProductsReducers from './ProductsReducers';

const root =combineReducers({
    ProductsReducers
});

const store = createStore(root);
export default store;
