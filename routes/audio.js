const express = require('express')
const cors = require('cors')
const router = express.Router()
const { initializeApp } = require('firebase/app')
const { getDownloadURL, getStorage, ref } = require('firebase/storage')

const corsOptions = {
    origin: '*'
}

const firebaseConfig = {
    apiKey: "AIzaSyCypWoVyzl1h_B-p_VDIGItogLf8GVeOto",
    authDomain: "tangowebapp.firebaseapp.com",
    projectId: "tangowebapp",
    storageBucket: "tangowebapp.appspot.com",
    messagingSenderId: "1030840176866",
    appId: "1:1030840176866:web:5c1d9c9ac8fb2fa2e8cebb"
  }

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
//const exampleRef = ref(storage, 'test/ChaosGameJam.mp3')

//getDownloadURL(exampleRef).then((url) => {
//    console.log(url);
//})

function GetAudioLink(library, audioTag) {
    const audioRef = ref(storage, library + '/' + audioTag + '.mp3')

    return getDownloadURL(audioRef).then((url) => {
        return (url)
    })
}

router.get('/:library/:audioTag', cors(corsOptions), (req, res) => {
    GetAudioLink(req.params.library, req.params.audioTag)
    .then((results) => {res.status(200).json(results)})
    .catch(error => {
            console.log("Failed Fetch from Firebase");
            console.log(error);
            res.status(503).send("Failed to connect to Firebase... Try again later.")
        }
    )
})

module.exports = router