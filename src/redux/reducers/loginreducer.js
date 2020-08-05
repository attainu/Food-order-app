import {SET_USER,SET_STATUS} from"../actionname"

const initialState = {
    user: null,
    status:null
}

export const loginReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_USER: return{...state,user:payload}
        case SET_STATUS:return{...state,status:payload}
        default: return state
    }
}

