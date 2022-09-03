import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { productoReducer } from "./productoReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  productos: productoReducer,
});
