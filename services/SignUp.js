import axios from "axios"
const baseUrl = "/api/signup"

export default async function updateService(credentials) {
    const response = await axios.post(baseUrl, credentials)
    return response.data;
}
