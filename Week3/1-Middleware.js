const express = require("express") 

const app = express() 



function checkValidation(req,res,next) {
    const userName = req.headers.username 
    const pass = req.headers.pass 
    console.log(pass,userName)
    if(userName !== "hari" || pass !== "123"){
        return res.status(403).json({
            success:false,
            message:"User Name And Password Incorrect"
        })
    }else{
        next()
    }
}

const checkKidney = (req,res,next) => {
    const kidney = req.query.nu 

    if(!(kidney === "1" || kidney === "2")){
        res.status(403).json({
            success:false,
            message:"Please Check kidney number"
        })
    }else{
        next()
    }
}


app.get("/health-checkup",checkValidation,checkKidney,function (req,res){
    res.send("All Things are good ")
})

app.get("/",(req,res)=>{
    res.send("Hello jee")
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port number 3000")
})