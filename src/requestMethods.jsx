import axios from 'axios';

const BaseUrl = process.env.REACT_APP_API_URL + '/api/';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWY5ZWM0Yzk1ZDRjZTJjNjlmOGI0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTUyNDEwOCwiZXhwIjoxNjM5NzgzMzA4fQ.TiGkAUKG92PHSdR4wtPLo8I4bloQIwCCnywCAwEb0Kk";

export const publicRequest = axios.create({
    baseURL: BaseUrl,
})

export const userRequest = axios.create({
    baseURL: BaseUrl,
    header: {
        token: `Bearer ${TOKEN}`
    }
})