

export default function handler(req, res) {
  console.log("hello")
  res.status(200).json({ name: 'John Doe' })
}
