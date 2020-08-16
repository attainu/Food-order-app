import { GET_HOTEL_DETAILS, GET_REVIEWS } from "../actionname";

export const fetchRestaurant = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_HOTEL_DETAILS, payload: null });
    fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`, {
      headers: {
        Accept: "application/json",
        "User-Key": "1648e41ffcc047571f43bdd1d463c0fb",
      },
    })
      .then((res1) => {

        return res1.json();
      })
      .then((res1) => {
        console.log(res1);
        dispatch({ type: GET_HOTEL_DETAILS, payload: res1 });
      });
  } catch (err) {
    console.error(err);
  }
};

export const getreviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_REVIEWS, payload: null });
    fetch(`https://developers.zomato.com/api/v2.1/reviews?res_id=${id}`, {
      headers: {
        Accept: "application/json",
        "User-Key": "1648e41ffcc047571f43bdd1d463c0fb"
      }
    })
      .then((res1) => {

        return res1.json();
      })
      .then((res1) => {
        console.log(res1);
        dispatch({ type: GET_REVIEWS, payload: res1 });
      });
  } catch (err) {
    console.error(err);
  }
};
