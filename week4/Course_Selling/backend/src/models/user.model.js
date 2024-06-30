import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    password:{
        type:String
    },
    purhasedCourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})

export const User = mongoose.model("User",userSchema)