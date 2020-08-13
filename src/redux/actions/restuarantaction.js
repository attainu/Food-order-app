import { GET_CITIES, GET_HOTEL,CITY_NAME,GET_PAGE } from "../actionname";

export const setplace = (place,start=0,id="") => async (dispatch) => {
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
        try {
          fetch(
            `https://developers.zomato.com/api/v2.1/search?entity_id=${res.location_suggestions[0].id}&entity_type=city${id!==""?`&category=${id}`:""}&start=${start}&count=18`,
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

        dispatch({ type: GET_CITIES, payload: res });
      });
  } catch (err) {
    console.error(err);
  }
};

export const getcity=(city)=>(dispatch)=>{
  dispatch({ type: CITY_NAME, payload: city });
}

export const getpage=(page)=>(dispatch)=>{
  dispatch({type:GET_PAGE,payload:page})
}
