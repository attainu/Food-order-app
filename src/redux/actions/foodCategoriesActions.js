
import { GET_CATEGORIES } from "../actionname";


export const setcategory = () => async (dispatch) => {
  try {

    dispatch({ type: GET_CATEGORIES, payload: null })
    fetch("https://developers.zomato.com/api/v2.1/categories", {
      headers: {
        Accept: "application/json",
        "User-Key": "0237b8caaf073e01a40bda294627a4d1"
      }
    }).then(res => {
      console.log(res)
      return res.json()
    }).then(res => {
      console.log(res)
      dispatch({ type: GET_CATEGORIES, payload: res })
    })

  }
  catch (err) {
    console.error(err)
  }

}

