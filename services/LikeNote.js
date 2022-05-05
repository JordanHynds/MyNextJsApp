import axios from "axios"
const baseUrl = "/api/likenote"

export default async function likeNoteService(note) {
    const response = await axios.post(baseUrl, note)
    return response.data;
}