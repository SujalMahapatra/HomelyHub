//centeralized API setup
//one api configuration that we can use throughout our react application

import axios from 'axios'; //Axios helps frontend request from backend and fetch response back from backend to frontend
import qs from 'qs'; //It is used to convert javascript object to url query string

export const axiosInstance = axios.create({
    baseURL: '/api',
    withCredentials: true,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
})

