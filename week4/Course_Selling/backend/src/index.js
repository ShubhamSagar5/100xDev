import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import dbConnection from './database/database.js'
import cookieParser from 'cookie-parser'
import adminRoute from './routes/admin.route.js'
import userRoute from './routes/user.route.js '

const app = express()

dotenv.config({
    path:"./config/config.env"
})


app.use(bodyParser)
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Server is Running")
})

app.use('/api/v1',adminRoute)
app.use('/api/v1',userRoute)

app.use((error,req,res,next)=>{
    return res.status(500).json({
        success:false,
        message:error.message
    })
})

// dbConnection()

app.listen(process.env.PORT,()=>{
    console.log("app listen on port "+process.env.PORT)
})