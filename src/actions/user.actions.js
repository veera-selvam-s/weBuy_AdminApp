import { userConstants } from "./constants";//importing authentincating variables
import axios from "../helpers/axios";//importing instace form helpers

export const signup = (user) => {
    console.log(user);
    //(user) input from the signin page
    return async (dispatch) => {
        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axios.post(`/admin/signup`, {//processing post operation
            ...user
        });
        if (res.status === 201) {//connection complete
            const { message } = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message
                }
            });
        } else if (res.status === 404) {//connection incomplete
            dispatch({
                type: userConstants.USER_REGISTER_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}