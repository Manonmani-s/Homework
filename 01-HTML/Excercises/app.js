

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5050

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/', function (req, res) {

    res.sendFile('/home/dci/Documents/fbw39/Homework/01-HTML/Excercises/index.html')
})

app.post('/submit-data', function (req, res) {
    console.log(req.body.fname)
    res.send('helo' + req.body.fname)
    
})


let server = app.listen(port, function () {
    console.log('Node server is listening to port:' + port)
})

// const port = 5050

// let server = app.listen(port, function () {
//         console.log('Node server is listening to port:' + port)})