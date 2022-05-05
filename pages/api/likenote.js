const db = require('../../db')

const text = 'UPDATE NOTES SET likebutton = likebutton + 1 WHERE id = $1 RETURNING *';

export default async function handler(req, res) {
    try {
        const values = [req.body.id]
        const response = await db.query(text, values)
        res.status(200).json(response)
    } catch (err) {
        console.log(err.stack)
    }
}