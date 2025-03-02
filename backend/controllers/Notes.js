import NotesModel from "../models/Notes.js"


const Create=async(req,res)=>{
    try {
        const userId=req.userId
        const {title}=req.body

        if (!title) {
            return res.status(303).json({success:false,message:"Title are required"})
        }

        const NewNotes= new NotesModel({
            title, userId
        })
        await NewNotes.save()
        res.status(200).json({success:true,message:"Notes created successfully",Notes:NewNotes})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
        
    }
}

const UpdateNotes=async(req,res)=>{
    try{
        const userId=req.userId
        console.log(userId)
        const NotesId=req.params.id
        const {title}=req.body
        const FindNotes= await NotesModel.findById({_id:NotesId})
        if (!FindNotes) {
            return res.status(404).json({success:false,message:"Notes not found"})
        }

        const NotesuserId=FindNotes.userId
        
        if (userId.toString() !==NotesuserId) {
            return res.status(401).json({success:false,message:"Unauthorized user"})
        }

        const UpdateNotes= await NotesModel.findByIdAndUpdate(
            {_id:NotesId},
            {title},{new:true}
        )
        res.status(200).json({success:true,message:"Notes update successfully",UpdateNotes})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const Delete=async(req,res)=>{
    try {
        const userId=req.userId
        console.log(userId)
        const NotesId=req.params.id

        const FindNotes= await NotesModel.findById({_id:NotesId})
        if (!FindNotes) {
            return res.status(404).json({success:false,message:"Notes not found"})
        }

        const NotesuserId=FindNotes.userId
        
        if (userId.toString() !==NotesuserId) {
            return res.status(401).json({success:false,message:"Unauthorized user"})
        }
        const DeletedNote= await NotesModel.findByIdAndDelete(NotesId)
        res.status(200).json({success:true,message:"Notes deleted successfully",DeletedNote})


    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const GetNotes=async(req,res)=>{
    try {
        const userId=req.userId

        const Notes= await NotesModel.find({userId})
    if (!Notes) {
        return res.status(404).json({success:false,message:"No data found"})
    
    }
    res.status(200).json({success:true,Notes})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}


export {Create,UpdateNotes,Delete,GetNotes}