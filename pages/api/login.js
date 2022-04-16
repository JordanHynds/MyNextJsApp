const db = require('../../db')
const bcrypt = require('bcryptjs');

const text = `SELECT (password) FROM USERS
WHERE username like $1`;


export default async function handler(req, res) {
  try {
    const values = [`${req.body.username}`]
    const response = await db.query(text, values)
    const verified = bcrypt.compareSync(req.body.password, response.rows[0].password);
    if (verified) {
      res.status(200).json(req.body.username)
    }
    else {
      res.status(404);
    }
  } catch (err) {
    console.log(err.stack)
  }
}