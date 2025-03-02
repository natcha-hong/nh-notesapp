import express from 'express'
import { Create, UpdateNotes, Delete, GetNotes } from '../controllers/Notes.js'
import { VerificaionToken } from '../middlewares/VerificationToken.js'

const NotesRoutes=express.Router()

NotesRoutes.post('/CreateNote',VerificaionToken,Create)
NotesRoutes.put('/UpdateNotes/:id',VerificaionToken,UpdateNotes)
NotesRoutes.delete('/DeleteNote/:id',VerificaionToken,Delete)
NotesRoutes.get('/GetNotes',VerificaionToken,GetNotes)

export default NotesRoutes