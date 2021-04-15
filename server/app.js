const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')

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


app.get('/',(req, res)=>{
    res.send("Welcome to nodejs")
})

app.listen(3000,()=>{
    console.log("Server running")
})