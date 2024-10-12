import express from "express"
import dotenv from "dotenv"
import authRoutes from './routes/auth.routes.js'
import connectDB from "./DataBase/dbConnection.js"

dotenv.config()
const app=express()
const PORT =process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("server live")
})


app.use(express.json());
app.use('/api/auth/',authRoutes)
app.listen(5000,()=>{
    connectDB();
    console.log(`server started on PORT http://localhost:${PORT}`)
})