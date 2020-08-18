import { GET_HOTEL_DETAILS, GET_REVIEWS, GET_FAV, GET_FAV_RES, DEL_FAV, DEL_ID } from "../actionname";

const initialState = {
  hotelDetails: null,
  review: null,
  fav: [],
  favres: [],
};

export const restuarantDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HOTEL_DETAILS:
      return { ...state, hotelDetails: payload };
    case GET_REVIEWS:
      return { ...state, review: payload };
    case GET_FAV:
      if(payload!==null){
      return { ...state, ...state.fav.push(payload) }}
      state.fav=[]
      return{...state,...state.fav}
    case GET_FAV_RES:
      if(payload!=null){
      return { ...state, ...state.favres.push(payload) }
      }
      state.favres=[]
      return{...state,...state.favres}
    case DEL_FAV:
      const filteredPeople = state.favres.filter((item) => item.id !== payload);
      state.favres = filteredPeople
      return { ...state, ...state.favres }
    case DEL_ID:
      const filt = state.favres.filter((item) => item.id !== payload);
      state.fav = filt
      return { ...state, ...state.fav }
   
    default:
      return state;
  }
};

