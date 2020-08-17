import { SET_FOOD, SET_FOODLOADING, GET_PAGE } from "../actionname";

const initialState = {
  foods: null,
  foodLoading: false,
  page: 0,
};

export const foodReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FOOD:
      return { ...state, foods: payload };
    case SET_FOODLOADING:
      return { ...state, foodLoading: !state.foodLoading };
    case GET_PAGE:
      return { ...state, page: payload };
    default:
      return state;
  }
};
