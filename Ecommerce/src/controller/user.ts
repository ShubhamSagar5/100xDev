import { Request, Response } from "express";
import { prisma } from "../server";
import { compareSync, hashSync} from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { JWTSECRET } from "../secret";
import {z} from 'zod'

const userSchema = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string()
})


export const signup = async(req:Request,res:Response) => {
        const {name,email,password} = req.body

       try {

        const response = userSchema.safeParse({name,email,password})

        if(response.error){
            console.log(response)
            return res.status(400).json({
                success:false,
                message:response.error.issues.map((err)=>(
                    err.path[0] + " " + err.message
                ))
            })
        }

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
    try {
        const {email,password} = req.body

        const user = await prisma.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User Not Register please signup first"
            })
        }

        const comparePassword = compareSync(password,user.password)

        if(!comparePassword){
            return res.status(403).json({
                success:false,
                message:"Password Not Match"
            })
        }

        const token = jwt.sign({
            userId:user.id
        },JWTSECRET)

        return res.status(200).json({
            success:true,
            message:"User Login Successfully",
            user,
            token
        })

    } catch (error) {
        
    }
}
