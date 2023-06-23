import axios from "axios";

export const API_KEY = 'Zxuxjlh7l8bRmmcuhP58Y0Wo78OZv5ia'

const API = axios.create({
    baseURL: 'https://api.apilayer.com/'
})
API.defaults.headers.common['apikey'] = API_KEY;

export { API }

