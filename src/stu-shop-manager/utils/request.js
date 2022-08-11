import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
})

instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
})

export function get(url, params) {
    return axios.get(url, {
        params
    })
}

export function post(url, data) {
    return axios.post(url, data)
}

export function put(url, data) {
    return axios.put(url, data)
}

export function del(url) {
    return axios.delete(url)
}