const db = require('../../db')

const text = 'SELECT * FROM NOTES WHERE USERNAME like $1';


export default async function handler(req, res) {
    try {
        let values;
        if (typeof (req.body) == "string") {
            const response = JSON.parse(req.body)
            values = [`${response.user}`]
        } else {
            values = [`${req.body.user}`]
        }
        const response = await db.query(text, values)
        res.status(200).json(response)
    } catch (err) {
        console.log(err.stack)
    }
}