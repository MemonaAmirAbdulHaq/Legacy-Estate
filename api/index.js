import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './route/user.route.js'
import authRouter from './route/auth.route.js'
dotenv.config()
const app=express()
mongoose.connect(process.env.MONGO).then(()=>{
  console.log('connect to db')
}).catch((err)=>{
    console.log(err)
})
app.use(express.json());
app.listen(3000,()=>{
    console.log('Server is running on 3000')
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)