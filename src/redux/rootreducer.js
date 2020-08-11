import { combineReducers } from "redux";
import { loginReducer } from "./reducers/loginreducer";
import { registerReducer } from "./reducers/registerreducer";
import { foodReducer } from "./reducers/foodreducer";
import { categoriesReducer } from "./reducers/FoodCategoriesReducer";
import {restuarantReducer} from "./reducers/restuarantreducer"

const rootReducer = combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
  foodState: foodReducer,
  categoriesState: categoriesReducer,
  restuarantState: restuarantReducer
});


export default rootReducer;
