
import { GET_CATEGORIES } from "../actionname";


export const setcategory = () => async (dispatch) => {
  try {

    dispatch({ type: GET_CATEGORIES, payload: null })
    fetch("https://developers.zomato.com/api/v2.1/categories", {
      headers: {
        Accept: "application/json",
        "User-Key": "1648e41ffcc047571f43bdd1d463c0fb"
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

