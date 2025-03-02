
import jwt, { decode } from 'jsonwebtoken'
import UserModel from '../models/Auth.js'

const VerificaionToken=async(req,res,next)=>{
    try {
        const token= req.cookies.token
        if (!token) {
            return res.ststus(401).json({success:false,message:"Unauthorized, Please Login"})
        }
        const decoded = await jwt.decode(token,process.env.SecretKey)
        const user = await UserModel.findById(decoded.userId)
        if (!user) {
            return res.ststus(404).json({success:false,message:"User Not Found"})
        }
        req.userId=user._id
        next ()
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

export {VerificaionToken}