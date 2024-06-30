import jwt from 'jsonwebtoken'

export const adminAuth = async(req,res,next) => {
    try {
        

        const Token  = req.cookies.Token 

        if(!Token){
            return res.status(404).json({
                success:false,
                message:"Admin Token Not Found Please Singup First" + error.message 
            })
        }

        const decode = jwt.verify(Token,process.env.JWT_SECRETKEY)

        if(decode){
            next ()
        }


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Fail During adminMiddleware" + error.message 
        })
    }
}