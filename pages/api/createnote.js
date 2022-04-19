const db = require('../../db')

const text = 'INSERT INTO NOTES (username, note) VALUES($1,$2) RETURNING *';

export default async function handler(req, res) {
    console.log(req.body)
    try {
        const values = [req.body.user, req.body.note]
        const response = await db.query(text, values)
        res.status(200).json(response)
    } catch (err) {
        console.log(err.stack)
    }
}