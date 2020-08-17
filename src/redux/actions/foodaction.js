import axios from "axios"
import config from "../../config";
import {SET_FOOD,SET_FOODLOADING}from "../actionname"
export const setfoods = (name="",start=0,end=9) => async (dispatch) => {
    try {
        dispatch({ type: SET_FOODLOADING })
        const { data } = await axios(`https://api.edamam.com/search?q=${name}&app_id=${config.FOOD_APP_ID}&app_key=${config.FOOD_APP_KEY}&from=${start}&to=${end}`)
        console.log(data)
         dispatch({ type: SET_FOOD, payload: data.hits})
    }
    catch (err) {
        console.error(err)
    }
    finally {
        dispatch({ type: SET_FOODLOADING})
    }
}
