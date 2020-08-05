import {SET_ISLOADING,SET_ITEMS} from"../actionname"

const initialState = {
    items: null,
    isLoading: false,
}

export const registerReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_ITEMS: return{...state,items:payload}
        case SET_ISLOADING: return{...state,isLoading:!state.isLoading}
        default: return state
    }
}

