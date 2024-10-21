import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const protectRoute = async(req,res,next)=>{
    try {
        const token=req.cookie("jwt")
        if(!token){
            res.status(401).json({success:false,message:"Unauthorized- No Token"})
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(!decoded){
            res.status(401).json({success:false,message:"Unauthorized Invalid Token"})

        }
        const user =await User.findById(decoded.userId).select("-password")
        if(!user){
            res.status(404).json({success:false,message:"user not found"})
        }

        res.user=user
        next()

        
    } catch (error) {
        console.log("error in  protectRoute middleware",error.message)
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}
export default protectRoute