import { Request, Response } from "express";
import { prisma } from "../server";
import { hashSync} from 'bcrypt'

export const signup = async(req:Request,res:Response) => {
        const {name,email,password} = req.body

       try {
         const user = await prisma.user.findFirst({
             where:{
                 email:email
             }
         })
 
         if(user){
             return res.status(400).json({
                 success:false,
                 message:"User already register with this email"
             })
         }
 
         const userCreate = await prisma.user.create({
             data:{
                 name,
                 email,
                 password: hashSync(password,10)
             }
         })
 
         return res.status(200).json({
             success:true,
             message:"User Sign Up Successfully ",
             userData:userCreate
         })
 
 
       } catch (error:any) {
        return res.status(500).json({
            success:false,
            message:"Ineternal server error at time of signup " + error.message,
            
        })       
       }    
    }


export const login = async(req:Request,res:Response) => {
    res.send("login working")
}
