import { User } from "../models/user.model.js"
import jwt from 'jsonwebtoken'

export const signUp = async (req,res) => {
    try {
        const {userName,password} = req.body
    
        if(!userName || !password){
            return res.status(404).json({
                success:false,
                message:"All deatils required--First Name and Password"
            })
        }
    
        const alreadyRegister = await User.find({user:userName})
    
        if(alreadyRegister){
            return res.status(400).json({
                success:false,
                message:"User Alreday Register With this email or Username"
            })
        }
    
        const register = await User.create({
            userName:userName,
            password:password
        })
        if(!register){
           return res.status(403).json({
               success:false,
               message:"user not signin successfully " + error.message 
           })
        }

        const geneateToken = jwt.sign({userName:userName},process.env.JWT_USER_SECRETKEY,{
            expiresIn:process.env.JWT_EXPIRE
        })

        const option = {
            expire:new Date(Date.now() + process.env.COOKIEEXPIRE * 24 * 60 * 60 * 100)
        }

        return res.status(200).cookie("userToken",geneateToken,option).json({
            success:true,
            message:"User Sign Up Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error During Signing " + error.message 
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

export const byCourse = async() => {
try {
        const courseId = req.params.id 
    
        const userName = req.userName 
    
        const findUser = await User.findOne({userName}) 

        const byCourse = await findUser.updateOne({$push:{purhasedCourse:courseId}}) 

        return res.status(200).json({
            success:true,
            message:"Course Purchased Successfully"
        })
    
} catch (error) {
    return res.status(500).json({
        success:false,
        message:"Error During Purchasing Courses " + error.message 
    })
}
}

export const getPurchasedCourse = async(req,res) => {
try {
    const userName = req.userName 
    const findUser = await User.findOne({userName}).populate('purhasedCourse').exec()
    return res.status(200).json({
        success:true,
        purhasedCourse:findUser,
        message:"Course Purchased Fetch Successfully"
    })

} catch (error) {
    return res.status(500).json({
        success:false,
        message:"Error During Fetching Purchasing Courses " + error.message 
    })
}
}