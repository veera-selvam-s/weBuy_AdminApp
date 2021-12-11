import axios from '../helpers/axios';
export const getAllCategory = () => {
    return async dispatch => {
        const res = await axios.get(`category/getCategory`);
        console.log(res);
    }
}