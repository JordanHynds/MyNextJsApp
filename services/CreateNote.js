import axios from "axios"
const baseUrl = "/api/createnote"

export default async function createNoteService(note) {
    const response = await axios.post(baseUrl, note)
    return response.data;
}