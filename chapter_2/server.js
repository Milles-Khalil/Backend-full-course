const express = require('express')
const app = express()
const PORT = 7575

const data = ['james']

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`
        <body 
          style="
            background:pink;
            color: blue;"
        >
          <h1>Data: </h1>
          <p>Data:${JSON.stringify(data)} </p>
          

          <a href='/dashboard'>dashboard</a>
        </body>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
          <h1>dashboard</h1>
          <a href='/'>home</a>
        </body>`)
})

app.get('/api/data', (req, res) => {
    console.log('this one was for data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    res.sendStatus(203)
    console.log('we deleted the last element of the data array')
})

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`))