import axios from "axios";

const baseUrl = 'http://localhost:3333/api/v1'

const api = axios.create({
    baseURL: baseUrl,
})

export default api