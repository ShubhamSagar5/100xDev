import mongoose from 'mongoose'


const dbConnection = async() => {
    try {
       const connect = await mongoose.connect(process.env.MONGODB_URI,{
           dbName:"course_selling"
       })
       console.log("Database connect Successfully")
    } catch (error) {
       console.log("Something Error Occur While Connecting with database " + error.message)
    }
   }

export default dbConnection