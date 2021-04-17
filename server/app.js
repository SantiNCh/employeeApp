const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const e = require('express')
require('./Employee')


app.use(express.json());

const Employee = mongoose.model("employee")


const mongoUri = "mongodb+srv://exosis:m563ugwbt4IkU4Hr@cluster0.slwfj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected",()=>{
    console.log("Connected to mongo")
})

mongoose.connection.on("error",(err)=>{
    console.log("Error", err)
})


app.post('/send-data', (req, res)=>{
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position
    })
    employee.save().then(data=>{
        console.log(data)
        res.send("Success")
    }).catch(err => {
        console.log(err)
    })
    
})


app.get('/',(req, res)=>{
    res.send("Welcome to nodejs")
})

app.listen(3000,()=>{
    console.log("Server running")
})