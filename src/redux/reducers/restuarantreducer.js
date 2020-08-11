import { GET_CITIES,GET_HOTEL } from "../actionname"

const initialState = {
   place:null,
   hotel:null,
}

export const restuarantReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_CITIES: return { ...state, place: payload }
        case GET_HOTEL:return{...state,hotel:payload}
        default: return state
    }
}

