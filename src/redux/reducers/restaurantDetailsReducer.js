import { GET_HOTEL_DETAILS, GET_REVIEWS, GET_FAV, GET_FAV_RES, DEL_FAV,DEL_ID } from "../actionname";

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
      return { ...state, ...state.fav.push(payload) }
    case GET_FAV_RES:
      return { ...state, ...state.favres.push(payload) }
    case DEL_FAV:
      const filteredPeople = state.favres.filter((item) => item.id !== payload);
      state.favres=filteredPeople
      return{...state,...state.favres}
    case DEL_ID:
      const filt = state.favres.filter((item) => item.id !== payload);
      state.fav=filt
      return{...state,...state.fav}
    default:
      return state;
  }
};

