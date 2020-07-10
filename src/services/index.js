import { combineReducers } from "redux";
import cart from './cart';
import productsReducer from './products';

export default combineReducers({
    cart,
    productsReducer
})
