import axios from 'axios';

const api = axios.create({
    baseURL: "/api/v1",
});
api.defaults.withCredentials = true;
api.interceptors.request.use( config => {
    // config.headers.Authorization = `Bearer ${ store.state.user.token }`;
    return config;
}, err => {
    Promise.reject(err);
});

api.interceptors.response.use( res => {
    return Promise.resolve(res);
}, err => {
    return Promise.reject(err);
});

export const getUsers = () => api.get("/users");