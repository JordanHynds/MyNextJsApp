const db = require('../../db')
const bcrypt = require('bcryptjs');

const text = 'INSERT INTO USERS (username, password, email) VALUES($1,$2,$3) RETURNING *';

export default async function handler(req, res) {
  try {
    const passwordHash = bcrypt.hashSync(req.body.password, 10);
    const values = [req.body.username, passwordHash, req.body.email]
    const response = await db.query(text, values)
    res.status(200).json(response)
  } catch (err) {
    console.log(err.stack)
  }
}