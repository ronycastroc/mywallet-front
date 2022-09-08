import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem('token'));
    const config = {
        headers: {
            Authorization: `Bearer ${auth}`
        } 
    }

    return config;
};

function postRegister(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
};

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
};

function postValue(body) {
    const promise = axios.post(`${BASE_URL}/value`, body);
    return promise;
};

function getValue() {
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/value`, config);
    return promise;
};

export { createHeaders, postRegister, postLogin, postValue, getValue };

