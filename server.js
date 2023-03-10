const express = require('express')
//import fetch from 'node-fetch'

const app = express()

app.use(express.json())

const jishoResultsRouter = require('./routes/jishoResult')
app.use('/jishoResult', jishoResultsRouter)

const sentenceDBRouter = require('./routes/sentenceDB')
app.use('/sentenceDB', sentenceDBRouter)

const audioRouter = require('./routes/audio')
app.use('/audio', audioRouter)

app.get("/", (req, res) => {
    res.sendStatus(200)
})

app.listen(3621, () => console.log("Server Running..."))