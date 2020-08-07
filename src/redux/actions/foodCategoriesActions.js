import axios from "axios";
import { LOADING, GET_CATEGORIES, ERROR } from "../actionname";

export const loading = () => ({
  type: LOADING,
});
export const get_Categories = (payload) => ({
  type: GET_CATEGORIES,
  payload,
});
export const error = (payload) => ({
  type: ERROR,
  payload,
});

export const fetchCategories = () => {
  return (dispatch) =>
    axios
      .get(`https://developers.zomato.com/api/v2.1/categories`, {
        headers: {
          Accept: "application/json",
          "User-Key": "0237b8caaf073e01a40bda294627a4d1",
        },
      })
      .then((res) =>
        res.data.categories.map((data) => dispatch(get_Categories(data)))
      )
      .catch((err) => dispatch(error(err)));
};
