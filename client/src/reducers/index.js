import { combineReducers } from "redux";

import products from "./products";
import authReducer from "./user";
import gallery from "./gallery";


export default combineReducers({
  products,
  authReducer,
  gallery,
});
