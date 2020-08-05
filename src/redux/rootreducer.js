import { combineReducers } from "redux"
import { loginReducer } from "./reducers/loginreducer"
import {registerReducer} from "./reducers/registerreducer"

const rootReducer = combineReducers({
    loginState:loginReducer,
    registerState:registerReducer
})

export default rootReducer