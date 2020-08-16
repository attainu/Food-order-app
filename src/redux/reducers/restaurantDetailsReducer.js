import { GET_HOTEL_DETAILS,GET_REVIEWS } from "../actionname";

const initialState = {
  hotelDetails: null,
  review:null,
};

export const restuarantDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HOTEL_DETAILS:
      return { ...state, hotelDetails: payload };
      case GET_REVIEWS:
      return { ...state, review: payload };
    default:
      return state;
  }
};
