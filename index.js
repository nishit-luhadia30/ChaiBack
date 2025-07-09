require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
    res.send('<h1>Health Check OK</h1>');
})

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})