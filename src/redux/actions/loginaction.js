
import { SET_USER,SET_STATUS} from "../actionname"
export const setuser = (email, password) => async (dispatch) => {
    try {
        if(email==null||password==null||email===""||password===""){
        dispatch({ type: SET_USER, payload: null })}
        else{
        fetch("https://backendapi.turing.com/customers/login", {
            body: `email=${email}&password=${password}`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        }).then(res => {
            dispatch({type:SET_STATUS,payload:res.status})
            console.log(res)
            return res.json()
        }).then(res=>{
            console.log(res)
            dispatch({ type: SET_USER, payload: res })
    })

} 


    }
    catch (err) {
        console.error(err)
    }

}

export const setguser=(name,email)=>(dispatch)=>{
  let obj ={customer:{name,email}}
  dispatch({type:SET_USER,payload:obj})
  dispatch({type:SET_STATUS,payload:200})
}