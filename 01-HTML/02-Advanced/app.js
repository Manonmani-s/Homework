//simple start
// let express = require('express')
// let app = express()

// //define routes here..

// let server = app.listen(5050, function(){console.log('Node server is running')})

//configuring routes for HTTP requests.

// const express = require('express')

// const app = express()

// //define routes here.. (get post put delete requests available)

// //GET request
// app.get('/', function (req, res) {
//     res.send('<h1>Hello World</h1>')
// })
// app.get('/about', function (req, res) {
//     res.send('<h1>About our App</h1>')
// })

// //POST route/request
// app.post('/submit-student-data', function(req,res){
//     res.send('<h1>POST request..</h1>')
// })


// //PUT request
// app.put('/update-data',function(req,res){
//     res.send('<h1>PUT request..</h1>')
// })

// //DELETE request
// app.delete('/delete-data',function(req,res){
//     res.send('DELETE Requests....')
// })

// const port = 5050

// let server = app.listen(port, function () {
//     console.log('Node server is listening to port:' + port)
// })



//step 3: Handling the HTML form



const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//Use  a middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))



//View the HTML Form with GET request
app.get('/', function(req,res){
    res.sendFile('/home/dci/Documents/fbw39/Homework/01-HTML/02-Advanced/index.html')
})


//POST (submit) request
app.post('/submit-student-data', function(req,res){
    console.log(req.body.fname,req.body.lname)
    

    res.send('Hello:' +req.body.fname)
})


const port = 5050

let server = app.listen(port, function () {
        console.log('Node server is listening to port:' + port)})
        