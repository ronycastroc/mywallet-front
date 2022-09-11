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
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
};

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-in`, body);
    return promise;
};

function postValue(body) {
    const config = createHeaders();
    const promise = axios.post(`${BASE_URL}/values`, body, config);
    return promise;
};

function getValues() {
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/values`, config);
    return promise;
};

function deleteValue(id) {
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/values/${id}`, config);

    return promise;
} 

function updateValue(id, body) {
    const config = createHeaders();
    const promise = axios.put(`${BASE_URL}/values/${id}`,body, config);

    return promise;
}

export { createHeaders, postRegister, postLogin, postValue, getValues, deleteValue, updateValue };

