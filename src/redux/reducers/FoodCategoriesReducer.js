import { GET_CATEGORIES} from "../actionname";

const initalState = {
  categories: null,
};

export const categoriesReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      return {
        categories: payload,
      };
    default:
      return state;
  }
};
