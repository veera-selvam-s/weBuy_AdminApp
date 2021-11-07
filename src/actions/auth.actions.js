import { authConstants } from "./constants";//importing authentincating variables
import axios from "../helpers/axios";//importing instace form helpers

export const login = (user) => {
  console.log(user);
  //(user) input from the signin page
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(`/admin/signin`, {//processing post operation
      ...user
    });
    if (res.status === 200) {//connection complete
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token, user
        }
      });
    } else if (res.status === 404) {//connection incomplete
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res.data.error }
      })
    }

  }
}

const isUserLoggedIn=()=>{
  return async dispatch =>{
    const token = localStorage.getItem('token');
    if(token){
      dispatch({
        payload:{
          token
        }
      });
    }else{
      dispatch({
        payload:{
          authenticate : false,
          message:'User needs to Login'
        }
      })
    }
  }
}