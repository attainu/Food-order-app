import { combineReducers } from "redux"
import { loginReducer } from "./reducers/loginreducer"
import {registerReducer} from "./reducers/registerreducer"
import {foodReducer} from "./reducers/foodreducer"

const rootReducer = combineReducers({
    loginState:loginReducer,
    registerState:registerReducer,
    foodState:foodReducer
})

export default rootReducer