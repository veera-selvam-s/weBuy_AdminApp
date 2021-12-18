import axios from 'axios';//axios package
import { api } from '../urlConfig';//getting base url from urlconfig
import store from '../store';
import { authConstants } from '../actions/constants';

const token = window.localStorage.getItem('token');

const axiosIntance = axios.create({ //creating axios instance
    baseURL: api,//assinged base url
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": true,
        "Access-Control-Allow-Credentials": true,
        'Authorization':token ? `Bearer ${token}` : ''
    }
});

axiosIntance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    if(auth.token){
        req.headers.Authorization = `Bearer ${auth.token}`;
    }
    return req;
})

axiosIntance.interceptors.response.use((res) => {
    return res;
}, (error) => {
    console.log(error.response);
    const { status } = error.response;
    if(status === 500){
        localStorage.clear();
        store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
})

export default axiosIntance;
