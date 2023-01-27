import axios from "axios"

export const apiAxios = axios.create({
    baseURL: 'https://api.radiopg.com.br/',
    responseType: 'json'
})