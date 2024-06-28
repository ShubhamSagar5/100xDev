


const calculateInterest = async(req,res) => {
    try {
        
        const {amount,rate,year} = req.query
        if(!amount || !rate || !year){
            return res.status(404).json({
                success:false,
                message:"Amount Rate Year Required"
            })
        }

        const ans = amount * (rate/100) * year 

        return res.status(200).json({
            success:true,
            message:`The simple interest earned after ${year} year is RS-${ans}.`,
            ans
        })

    } catch (error) {
        return res.status(404).json({
            success:false,
            message:error.message
        })
    }
}


module.exports = calculateInterest