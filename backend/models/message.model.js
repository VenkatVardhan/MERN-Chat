import mongoose from "mongoose";

const message=mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"

    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
        
    },
    message:{
        type:String,
        required:true

    }
},
{timestamps:true})
const Message = mongoose.model("Message",message)
export default Message