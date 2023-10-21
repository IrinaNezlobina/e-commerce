import axios from 'axios';

const BASE_API = 'https://fakestoreapi.com/';

const service = axios.create({
    baseURL: BASE_API,
});

/* Настройка всех запросов */
service.interceptors.request.use((config) => {
    const conf = config;

    conf.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    return conf;
}, (error) => {
    Promise.reject(error);
});

/* Настройка всех ответов */
service.interceptors.response.use(
    (response) => {
        const { data } = response;
        return data;
    },
    (error) => {
        return Promise.reject(new Error(error));
    },
);

export { BASE_API };

export default service;
