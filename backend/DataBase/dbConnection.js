import mongoose from "mongoose"
import dotenv from "dotenv"//not required 
dotenv.config()
const connectDB=async()=>{
    
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected")
        
    }
    catch(error){
        console.log("connection failed",error.message)
        process.exit(1) //exit with 1 is error
    }

}
export default connectDB;