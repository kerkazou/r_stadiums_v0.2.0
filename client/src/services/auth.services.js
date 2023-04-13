import axios from 'axios';

const API_URL = 'http://localhost:2000/auth/';

export const RegisterApi = (data) => {
    return axios.post(API_URL + 'register', data);
}

export const LoginApi = (data) => {
    return axios.post(API_URL + 'login', data);
}

export const ForgetPasswordApi = (data) => {
    return axios.post(API_URL + 'forget-password', data);
}

export const LogoutApi = () => {
    return axios.get(API_URL + 'logout');
}