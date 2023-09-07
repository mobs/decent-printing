import { combineReducers } from "redux";

import products from "./products";
import authReducer from "./user";
import gallery from "./gallery";
import banner from './banner'


export default combineReducers({
  products,
  authReducer,
  gallery,
  banner,
});
