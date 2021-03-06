const db = require('../../db')

const text = 'INSERT INTO NOTES (username, note, create_date, likebutton) VALUES($1,$2,$3,0) RETURNING *';

export default async function handler(req, res) {
    try {
        const date = new Date();
        date.getTime();
        const values = [req.body.user, req.body.note, date]
        const response = await db.query(text, values)
        res.status(200).json(response)
    } catch (err) {
        console.log(err.stack)
    }
}