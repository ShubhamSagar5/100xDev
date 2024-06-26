const express = require("express") 
const zod = require("zod")


const app = express() 

const schema1 = zod.string()
const schema2 = zod.string()
// const schema2 = zod.number()

function checkValidation(req,res,next) {
    const userName = req.headers.username 
    const pass = req.headers.pass 
    console.log(typeof pass,typeof userName)

    const userNameCheck = schema1.safeParse(userName)
    const passCheck = schema2.safeParse(pass)

    console.log(userNameCheck,passCheck.success)

    if(!userNameCheck || !passCheck.success){
        return res.status(411).json({
            success:false,
            message:"Something happen with input value"
        })
    }

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

let count = 0
const chekCountReq = (req,res,next) => {
    count = count+1 
    console.log(count)
    next()
}

app.get("/health-checkup",checkValidation,checkKidney,function (req,res){
    res.send("All Things are good ")
})

app.get("/",chekCountReq,(req,res)=>{
    res.send(`Hello Jee countnumber of req ${count}`)
})

// Global catches 

app.use(function (err,req,res,next){
    return res.status(500).json({
        success:false,
        message:"Something error occur in internal side"
    })
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port number 3000")
})