const mongoose = require('mongoose')

const connectDB = async() => {
 try {
    const connect = await mongoose.connect(process.env.MONGODB_URI,{
        dbName:"100devX"
    })
    console.log("Database connect Successfully")
 } catch (error) {
    console.log("Something Error Occur While Connecting with database " + error.message)
 }
}


module.exports = connectDB