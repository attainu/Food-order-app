import { GET_HOTEL_DETAILS, GET_CURRENT_HOTEL } from "../actionname";

const initialState = {
  currentHotel: null,
  hotelDetails: null,
};

export const restuarantDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HOTEL_DETAILS:
      return { ...state, hotelDetails: payload };
    case GET_CURRENT_HOTEL:
      return { ...state, currentHotel: payload };
    default:
      return state;
  }
};
