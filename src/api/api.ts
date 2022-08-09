import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL_LOCAL

const api = axios.create({
    baseURL: baseUrl,
})

export default api