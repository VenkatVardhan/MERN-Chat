
export const sendMessage=(req,res)=>{
    try {
        const {id:receiverId}=req.params
        const {message}=req.body
        const senderId=req.user._id

        
    } catch (error) {
        console.log("error in sendMessage controller",error.message)
        res.status(500).json({success:false,message:"Internal Server Error"})
        
    }



}