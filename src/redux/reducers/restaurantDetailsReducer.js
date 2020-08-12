import { GET_HOTEL_DETAILS } from "../actionname";

const initialState = {
  hotelDetails: null,
};

export const restuarantDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HOTEL_DETAILS:
      return { ...state, hotelDetails: payload };
    default:
      return state;
  }
};
