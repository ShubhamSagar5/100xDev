const User = require('../models/user.model')
const jwt = require('jsonwebtoken')


const auth = async(req,res,next) => {
    try {
        // console.log(req.cookie) 
        const token = req.cookies.token 

        if(!token){
            return res.status(404).json({
                success:false,
                message:"please login"
            })
        }

        const decode = jwt.verify(token,process.env.JWT_SECRETKEY) 
    
        req.user = await User.findById(decode.id) 
        
        next()

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = auth