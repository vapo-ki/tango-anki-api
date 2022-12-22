const express = require('express')
const cors = require('cors')
const router = express.Router()

const jishoLink = 'https://jisho.org/api/v1/search/words?keyword=';

const corsOptions = {
    origin: '*'
}

function GetJishoResults(term) {
    return fetch(jishoLink + term)
    .then((response) => {return response.json()})
    .then((jishoResult) => {return jishoResult})
    .catch(error => {return Promise.reject(new Error('Failed bla ' + error))})
}

// Getting Results
router.get('/:searchTerm', cors(corsOptions), (req, res) => {
    GetJishoResults(req.params.searchTerm)
    .then((results) => {res.status(200).json(results)})
    .catch(error => {
            console.log("Failed Fetch from Jisho");
            console.log(error);
            res.status(503).send("Failed to connect to Jisho API... Try again later.")
        }
    )
})

module.exports = router