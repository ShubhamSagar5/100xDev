

 const userAuth = (req,res,next) => {
    try {
        
        const userToken  = req.cookies.userToken 
        
        if(!userToken){
            return res.status(404).json({
                success:false,
                message:"User Token Not Found Please Singup First" + error.message 
            })
        }

        const decode = jwt.verify(Token,process.env.JWT_USER_SECRETKEY)

        if(decode){
            req.userName = decode.userName
            next ()
        }


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Fail During userMiddleware" + error.message 
        })
    }
}

export default userAuth