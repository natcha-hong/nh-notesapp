import express from 'express'
import dotenv from 'dotenv'
import AutRoutes from './routes/Auth.js'
import DbCon from './utils/db.js'
import NotesRoutes from './routes/Notes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()

// mongodb connection
DbCon()
const PORT=process.env.PORT
const app=express()

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use(cookieParser())

app.use('/auth',AutRoutes)
app.use('/notes',NotesRoutes)

app.get('/',(req,res)=>{
    res.send('hello i am Natcha')
})

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})