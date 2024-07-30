import express from 'express'
import {Express,Request,Response} from 'express'
import { PORT } from './secret'
import userRouter from './routes/index'

const app:Express = express() 



app.use("/api/user",userRouter)




app.get("/",(req:Request,res:Response)=>{
    res.send("Backend Working")
})


app.listen(PORT,()=>{
    console.log("Server is Running on Port " + PORT)  
})