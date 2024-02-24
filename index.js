require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({message: 'hello world'})
})

app.get('/hello', (req, res) => {
  res.json({message: 'hello'})
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT || 3000}`)
})