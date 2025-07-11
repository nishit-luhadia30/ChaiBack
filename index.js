require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: 'Joke 1', content: 'This is the first joke.' },
        { id: 2, title: 'Joke 2', content: 'This is the second joke.' },
        { id: 3, title: 'Joke 3', content: 'This is the third joke.' },
        { id: 4, title: 'Joke 4', content: 'This is the fourth joke.' },
        { id: 5, title: 'Joke 5', content: 'This is the fifth joke.' }
    ];
    res.json(jokes);
})

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})