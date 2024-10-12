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
        return res.status(400).json({success:false,message:"User Already Exists"})

    }
    catch(error){
        return res.status(505).json({success:false,message:"Internal Server Error"})

    }


}