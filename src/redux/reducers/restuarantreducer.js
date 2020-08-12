import { GET_CITIES,GET_HOTEL,CITY_NAME,GET_PAGE } from "../actionname"

const initialState = {
   place:null,
   hotel:null,
   city:null,
   page:0
}

export const restuarantReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_CITIES: return { ...state, place: payload }
        case GET_HOTEL:return{...state,hotel:payload}
        case CITY_NAME:return{...state,city:payload}
        case GET_PAGE:return{...state,page:payload}
        default: return state
    }
}

