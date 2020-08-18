import { GET_HOTEL_DETAILS, GET_REVIEWS, GET_FAV, GET_FAV_RES, DEL_FAV, DEL_ID } from "../actionname";

export const fetchRestaurant = (id) => async (dispatch) => {
  console.log(id)
  if (id !== null) {
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
  }
  else {
    dispatch({ type: GET_HOTEL_DETAILS, payload: null });
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

export const getfav = (id) => (dispatch) => {
  dispatch({ type: GET_FAV, payload: id });
};
export const getfavres = (id, img, name, cost) => (dispatch) => {
  let resobj = { id, img, name, cost }
  console.log(resobj)
  dispatch({ type: GET_FAV_RES, payload: resobj });
};

export const delfav = (id) => (dispatch) => {
  dispatch({ type: DEL_FAV, payload: id })
}

export const delid = (id) => (dispatch) => {
  dispatch({ type: DEL_ID, payload: id })
}