import axios from "axios"
const baseUrl = "/api/getnotes"

export default async function getNoteService(user) {
    const response = await axios.post(baseUrl, user)
    return response.data.rows;
}