const express = require('express')
const cors = require('cors')
const router = express.Router()
const sentenceJson = require('../sentenceDB/sentenceMatrix3.json')

const corsOptions = {
    origin: '*'
}

// Getting sentenceDB
router.get('/', cors(corsOptions), (req, res) => {
    res.json(sentenceJson)
})

module.exports = router