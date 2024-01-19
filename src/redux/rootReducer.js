import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import cartsReducer from "./carts/reducer";




const rootReducer = combineReducers({
    products: productReducer,
    carts: cartsReducer
})







export default rootReducer
















