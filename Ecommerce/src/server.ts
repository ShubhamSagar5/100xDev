import express from 'express'
import {Express,Request,Response} from 'express'
import { PORT } from './secret'
import userRouter from './routes/index'
import { PrismaClient } from '@prisma/client'


const app:Express = express() 

app.use(express.json()) 
app.use(express.urlencoded({extended:true}))


export const prisma = new PrismaClient({
    log:['query']
})


app.use("/api/user",userRouter)




app.get("/",(req:Request,res:Response)=>{
    res.send("Backend Working")
})


app.listen(PORT,()=>{
    console.log("Server is Running on Port " + PORT)  
})