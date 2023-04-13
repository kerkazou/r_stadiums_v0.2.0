import axios from 'axios';

const API_URL = 'http://localhost:2000/';

export const GetSportsCategoryApi = () => {
    return axios.get(API_URL + 'sports-category/get');
}