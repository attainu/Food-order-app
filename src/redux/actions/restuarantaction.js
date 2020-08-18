import { GET_CITIES, GET_HOTEL, CITY_NAME, GET_PAGE,GET_QUERY,GET_CATEGORY,SET_FOOD,GET_FAV,GET_FAV_RES } from "../actionname";

export const setplace = (place, start = 0, id = "",query="") => async (dispatch) => {
  console.log(place)
  if(place!==null){
  try {
    console.log(start)
    dispatch({ type: GET_CITIES, payload: null });
    fetch(`https://developers.zomato.com/api/v2.1/cities?q=${place}`, {
      headers: {
        Accept: "application/json",
        "User-Key": "1648e41ffcc047571f43bdd1d463c0fb",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {

          if(res.location_suggestions.length!==0){
        try {
          fetch(
            `https://developers.zomato.com/api/v2.1/search?entity_id=${res.location_suggestions[0].id}&entity_type=city${id !== "" ? `&category=${id}` : ""}&start=${start}&count=9${query !== "" ? `&q=${query}` : ""}`,
            {
              headers: {
                Accept: "application/json",
                "User-Key": "1648e41ffcc047571f43bdd1d463c0fb",
              },
            }
          )
            .then((res1) => {

              return res1.json();
            })
            .then((res1) => {
              console.log(res1);
              dispatch({ type: GET_HOTEL, payload: res1 });
            });
        } catch (err) {
          console.error(err);
        }
      }
      else{
        alert("please enter correct name")
      }
        dispatch({ type: GET_CITIES, payload: res });
      });
  } catch (err) {
    console.error(err);
  }
}
else
{
  dispatch({ type: GET_CITIES, payload: null });
  dispatch({ type: GET_HOTEL, payload: null });
  dispatch({ type: CITY_NAME, payload: null });
  dispatch({ type: GET_PAGE, payload: null });
  dispatch({ type: GET_CATEGORY, payload: null })
  dispatch({ type: SET_FOOD, payload:null})
  dispatch({type:GET_FAV_RES,payload:null})
  dispatch({type:GET_FAV,payload:null})
}
};

export const getcity = (city) => (dispatch) => {
  dispatch({ type: CITY_NAME, payload: city });
}

export const getpage = (page) => (dispatch) => {
  dispatch({ type: GET_PAGE, payload: page })
}

export const getcategory = (page) => (dispatch) => {
  dispatch({ type: GET_CATEGORY, payload: page })
}

export const getquery = (page) => (dispatch) => {
  dispatch({ type: GET_QUERY, payload: page })
}