import { combineReducers } from "redux";
import { loginReducer } from "./reducers/loginreducer";
import { registerReducer } from "./reducers/registerreducer";
import { foodReducer } from "./reducers/foodreducer";
import { categoriesReducer } from "./reducers/FoodCategoriesReducer";
import { restuarantReducer } from "./reducers/restuarantreducer";
import { restuarantDetailReducer } from "./reducers/restaurantDetailsReducer";

const rootReducer = combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
  foodState: foodReducer,
  categoriesState: categoriesReducer,
  restuarantState: restuarantReducer,
  restuarantDetailState: restuarantDetailReducer,
});

export default rootReducer;
