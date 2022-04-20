const db = require('../../db')

const text = 'SELECT * FROM NOTES WHERE USERNAME like $1';


export default async function handler(req, res) {
    try {
        const values = [`${req.body.user}`]
        const response = await db.query(text, values)
        res.status(200).json(response)
    } catch (err) {
        console.log(err.stack)
    }
}