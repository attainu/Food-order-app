
import {SET_ITEMS,SET_ISLOADING}from "../actionname"
export const setitems = (name,email,password) => async (dispatch) => {
    try {

        dispatch({ type: SET_ITEMS, payload: null })
        dispatch({ type: SET_ISLOADING })
        fetch("https://backendapi.turing.com/customers", {
            body: `name=${name}&email=${email}&password=${password}`,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
          }).then(res=>{console.log(res.status)
            dispatch({ type: SET_ITEMS, payload: res })
            return res.json()
        }
         
          ).then(res=>{console.log(res)})
    
        
    }
    catch (err) {
        console.error(err)
    }
    finally {
        dispatch({ type: SET_ISLOADING})
    }
}