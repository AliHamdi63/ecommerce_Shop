import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import ProductInfoReducer from "./ProductInfoReducer"

export default combineReducers({
    ProductReducer: ProductReducer,
    ProductInfoReducer: ProductInfoReducer
});