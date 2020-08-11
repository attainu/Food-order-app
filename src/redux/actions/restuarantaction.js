import { GET_CITIES,GET_HOTEL } from "../actionname";


export const setplace = (place) => async (dispatch) => {
    try {

        dispatch({ type: GET_CITIES, payload: null })
        fetch(`https://developers.zomato.com/api/v2.1/cities?q=${place}`, {
            headers: {
                Accept: "application/json",
                "User-Key": "0237b8caaf073e01a40bda294627a4d1"
            }
        }).then(res => {
            return res.json()
        }).then(res => {
                try {
                    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${res.location_suggestions[0].id}&entity_type=city&start=0&count=50`, {
                        headers: {
                            Accept: "application/json",
                            "User-Key": "0237b8caaf073e01a40bda294627a4d1"
                        }
                    }).then(res1 => {
                        console.log(res1)
                        return res1.json()
                    }).then(res1 => {
                        dispatch({ type: GET_HOTEL, payload: res1 })
                    })
            
                }
                catch (err) {
                    console.error(err)
                }
            
            
            
            dispatch({ type: GET_CITIES, payload: res })
        })

    }
    catch (err) {
        console.error(err)
    }

}

 