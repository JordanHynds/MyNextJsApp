const db = require('../../db')

const text = 'SELECT * FROM USERS';


export default async function users(req, res) {
    try {
        const response = await db.query(text)
        res.status(200).json(response)
    } catch (err) {
        console.log(err.stack)
    }
}