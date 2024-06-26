const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const tasks = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tasks:{
        type:String
    }
})

tasks.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,10)
    }else{
        next()
    }
})

tasks.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password)
} 

tasks.methods.generateToken = function () {
    return jwt.sign({id:this._id},process.env.JWT_SECRETKEY,{
        expiresIn:process.env.JWT_EXPIRE
    })
}


const Tasks  = mongoose.model("Tasks",tasks)

module.exports = Tasks