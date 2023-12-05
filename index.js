const express = require('express')
const app = express()

app.get('/test', (req, res) => {
    return res.status(200).json({"message" : "API working fine"})
})

app.listen(3300, (err) => {
    if(err) console.log("error while running server")
    else console.log("server is running")
})