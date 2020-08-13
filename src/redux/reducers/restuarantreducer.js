import { GET_CITIES,GET_HOTEL,CITY_NAME,GET_PAGE,GET_CATEGORY,GET_QUERY} from "../actionname"

const initialState = {
   place:null,
   hotel:null,
   city:null,
   query:"",
   category:"",
   page:0
}

export const restuarantReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_CITIES: return { ...state, place: payload }
        case GET_HOTEL:return{...state,hotel:payload}
        case CITY_NAME:return{...state,city:payload}
        case GET_PAGE:return{...state,page:payload}
        case GET_CATEGORY:return{...state,category:payload}
        case GET_QUERY:return{...state,query:payload}
        default: return state
    }
}

