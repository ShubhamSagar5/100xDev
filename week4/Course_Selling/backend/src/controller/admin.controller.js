import { Admin } from "../models/admin.model.js"
import { Course } from "../models/course.model.js"
import jwt from'jsonwebtoken'


export const signIn = async(req,res) => {
   try {
     const {userName,password} = req.body
 
     if(!userName || !password){
         return res.status(404).json({
             success:false,
             message:"All deatils required--First Name and Password"
         })
     }
 
     const alreadyRegister = await Admin.find({user:userName})
 
     if(alreadyRegister){
         return res.status(400).json({
             success:false,
             message:"Admin Alreday Register With this email or Username"
         })
     }
 
     const register = await Admin.create({
         userName:userName,
         password:password
     })
     if(!register){
        return res.status(403).json({
            success:false,
            message:"admin not signin successfully " + error.message 
        })
     }
     const geneateToken =  jwt.sign({userName:userName},process.env.JWT_SECRETKEY)
     
     const option = {
        expire:new Date(process.env.COOKIEEXPIRE * 24 * 60 * 60 * 100)
     }

     return res.status(200).cookie("Token",geneateToken,option).json({
        success:true,
        message:'Admin SignIn Successfully'
     })

   } catch (error) {
    return res.status(500).json({
        success:false,
        message:"Error During Signing " + error.message 
    })
   }
}

export const createCourse = async(req,res)=> {
    try {
        
        const {title,description,price} = req.body

        const postCourse = await Course.create({
            title:title,
            description:description,
            price:price
        })
        return res.status(200).json({
            success:true,
            data:postCourse,
            message:"Course Created Successfully "
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error During Creating course " + error.message 
        })
    }
}

export const getAllCourse = async(req,res)=>{
    try {
        
        const response = await Course.find({})
        return res.status(200).json({
            success:true,
            data:response,
            message:"Course Fetch Successfully "
        })


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error During Fetching Courses " + error.message 
        })
    }
}