import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    }
})

export const Course = mongoose.model("Course",courseSchema)