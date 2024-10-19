import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import { generateJWT } from "../utils/JsonWebTokens.js"
export const logIn=(req,res)=>{
    res.send("LogIn")

}
export const logOut=(req,res)=>{
    res.send('Logout')

}
export const signUp= async (req,res)=>{
    const {fullName,userName,password,gender,profilePic}=req.body
    try{
        const user= await User.findOne({userName})
        if(user){
            return res.status(400).json({success:false,message:"User Already Exists"})
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const boyPic=`https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlPic=`https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser=new User({
            fullName,
            userName,
            password:hashedPassword,
            gender,
            profilePic:(gender==='male'?boyPic:girlPic)

        })
        
        if(newUser){
            generateJWT(newUser._id,res)
            await newUser.save()
            res.status(201).json({success:true,id:newUser._id,
                fullName:newUser.fullName,
                userName:newUser.userName,
                profilePic:newUser.profilePic,
            })

        }
        else{
            res.status(400).json({success:false,message:"Invalid User Details"})
        }
        

    }
    catch(error){
        console.log("Error with sign up ",error.message)
        return res.status(505).json({success:false,message:"Internal Server Error"})

    }


}