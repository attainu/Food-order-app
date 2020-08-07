import { combineReducers } from "redux";
import { loginReducer } from "./reducers/loginreducer";
import { registerReducer } from "./reducers/registerreducer";
import { foodReducer } from "./reducers/foodreducer";
import { categoriesReducer } from "./reducers/FoodCategoriesReducer";

const rootReducer = combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
  foodState: foodReducer,
  categoriesReducer: categoriesReducer,
});

export default rootReducer;
