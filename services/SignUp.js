import axios from "axios"
const baseUrl = "/api/update"

export default async function updateService(credentials) {
    console.log(credentials)
    const response = await axios.post(baseUrl, credentials)
    //return response.data
}
