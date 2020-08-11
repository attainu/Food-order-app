import { GET_HOTEL_DETAILS, GET_CURRENT_HOTEL } from "../actionname";

export const fetchRestaurant = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CURRENT_HOTEL, payload: null });
    fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`, {
      headers: {
        Accept: "application/json",
        "User-Key": "0237b8caaf073e01a40bda294627a4d1",
      },
    })
      .then((res1) => {
        console.log(res1);
        return res1.json();
      })
      .then((res1) => {
        dispatch({ type: GET_CURRENT_HOTEL, payload: res1 });
      });
  } catch (err) {
    console.error(err);
  }
};

export const fetchRestaurantDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_HOTEL_DETAILS, payload: null });
    fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`, {
      headers: {
        Accept: "application/json",
        "User-Key": "0237b8caaf073e01a40bda294627a4d1",
      },
    })
      .then((res1) => {
        console.log(res1);
        return res1.json();
      })
      .then((res1) => {
        dispatch({ type: GET_HOTEL_DETAILS, payload: res1 });
      });
  } catch (err) {
    console.error(err);
  }
};
