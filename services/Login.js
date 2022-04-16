import axios from "axios"
const baseUrl = "/api/login"

export default async function loginService(credentials) {
    const response = await axios.post(baseUrl, credentials)
    return response.data;
}

