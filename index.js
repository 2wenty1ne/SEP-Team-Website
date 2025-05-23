const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'content')))


app.get("/", function(req, res)  {
    res.sendFile(path.join(__dirname, 'content', 'index.html'))
})

app.get('/kontakt', function(req, res) {
    res.sendFile(path.join(__dirname, 'content', 'kontakt.html'))
})

app.get('/werbung', function(req, res) {
    res.sendFile(path.join(__dirname, 'content', 'werbung.html'))
})

app.get('/ueberuns', function(req, res) {
    res.sendFile(path.join(__dirname, 'content', 'ueberUns.html'))
})


app.listen(5000, () => {
    console.log("Server started!"
    )
})