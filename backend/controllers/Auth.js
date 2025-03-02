import UserModel from "../models/Auth.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const Register=async(req,res)=>{
    try {
        const {userName,email,password}=req.body
        if (!userName || !email || !password) {
            return res.status(400).json({success:false,message:"All fields are required"})
        }
        const existingUser= await UserModel.findOne({email})
        if(existingUser){
            return res.status(409).json({success:false,message:"User already exist Please Login"})
        }
        const hasepassword= await bcrypt.hashSync(password,10)
        const NewUser= new UserModel({
            userName,email,password:hasepassword
        })
        NewUser.save()
        res.status(200).json({success:true,message:"User Register Successfully",User:NewUser})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}


const Login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const FindUser= await UserModel.findOne({email})
        if (!FindUser){
            return res.status(404).json({success:false,message:"User Not Found Please Register"})
        }
        const comparePassword= await bcrypt.compare(password,FindUser.password)
        if (!comparePassword) {
            return res.status(401).json({success:false,message:"Invalid Password"})
        }

        const token=await jwt.sign({userId:FindUser._id},process.env.SecretKey,{expiresIn:"3d"})
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            maxAge:3 * 24 * 3600 * 1000
        })

        res.status(200).json({success:true,message:"Login Successfully",user:FindUser,
            token

        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"}) 
    }
}


const Logout=async(req,res)=>{
    try {
        res.clearCookie('token')
        res.status(200).json({success:true,message:"User Logout Successfully"})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}


export {Register,Login,Logout}