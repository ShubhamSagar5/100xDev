const express= require('express')
const cors = require('cors')

const interest = require('./routes')

const app = express()

app.use(cors())


app.use("/api/v1/calculateInterest",interest)

app.get("/",(req,res)=>{
    res.send("<h2>Hello Backend Is Working</h2>")
})


app.listen(3000,(req,res)=>{
    console.log("Server is running on Port number 3000")
})