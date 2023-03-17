import axios from "axios";
import {errorMessage, successMessage} from "../ToastHelper";
const https = require("https");

const instance = axios.create({
    baseURL: "http://35.209.246.97/api",
    headers: {
        "Content-Type": "application/json",
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    (res) => {
        if(res.config.method !=="get"){
            successMessage('Success!');
        }
        return res.data;
    },
    async (err) => {
        const originalConfig = err.config;
        if(originalConfig.method !== "get"){
            errorMessage(err.message);
        }

        if ((originalConfig.url !== "/login"&&originalConfig.url !=="/refresh") && err.response?.status === 401) {
            if (!originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    originalConfig._retry = false;
                    const rs = await instance.post("/refresh", {
                        refresh_token: localStorage.getItem('refresh_token'),
                    });
                    localStorage.setItem('refresh_token', rs.data.access_token);
                    localStorage.setItem('access_token', rs.data.refresh_token);
                    return instance(originalConfig);
                } catch (_error) {
                    if(_error.response.status===401){
                        window.location.href='/login';
                    }
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }
);

export default instance;