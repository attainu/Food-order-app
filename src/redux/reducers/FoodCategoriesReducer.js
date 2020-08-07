import { LOADING, GET_CATEGORIES, ERROR } from "../actionname";

const initalState = {
  loading: true,
  categories: [],
};

export const categoriesReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        categories: [...state.categories],
      };
    case GET_CATEGORIES:
      return {
        loading: false,
        categories: [...state.categories, payload],
      };
    case ERROR:
      return {
        loading: true,
        categories: [...state.categories, payload],
      };
    default:
      return state;
  }
};
