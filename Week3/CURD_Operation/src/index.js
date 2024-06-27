const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDB = require('./db/dbConnection')
const userRoute = require('./routes/userRoute')



const app = express() 

dotenv.config({
    path:"./config/config.env"
})

app.use(cors({
    origin:"*",
    methods:"GET PUT POST DELETE",
    credentials:true
}))

app.use(cookieParser())

app.use(express.json()) 

app.get("/",(req,res)=>{
    res.send("<h1>Hello Jee</h1>")
})


app.use("/api/v1/user",userRoute)


connectDB()





// Global catches
app.use((error,req,res,next)=>{
    return res.status(500).json({
        success:false,
        message:error.message || "Internal Error "
    })
})



app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on Port Nu ${process.env.PORT}`)
})




