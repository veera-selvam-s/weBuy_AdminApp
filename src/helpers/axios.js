import axios from 'axios';
import { api } from '../urlConfig';

const axiosInstance = axios.create({
    baseURL: api,
    timeout: 4000,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
});

export default axiosInstance;
