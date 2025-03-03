import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Notes from '../components/Notes'
import NoteModal from '../components/NoteModal'
import { dele, get, post, put } from '../../services/ApiEndPoint'
import toast from 'react-hot-toast'
import UpdateModal from '../components/UpdateModal'
import DeleteModal from '../components/DeleteModal'



const Home = () => {

    const [notes,setNotes]=useState([])
    const [title,setTitle]=useState("")
    const [refresh,setRefresh]=useState(false)
    const [updatenote,setUpdatenote]=useState('')
    const [notesId,setNotesID]=useState('')

    if (notes) {
        console.log('res',notes)
    }

    useEffect(()=>{
        const getnotes=async()=>{
            try {
                const request= await get('/notes/getnotes')
                const response= request.data
                setNotes(response.Notes)
        
            } catch (error) {
                console.log(error)
            }
        }

    getnotes()

    },[refresh])

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleCreateNote=async()=>{
        try {
            const request= await post('/notes/createnote',{title})
            const response= request.data
            if (response.success) {
                toast.success(response.message)
                setRefresh(!refresh)
              }
            console.log('createnoteResponser',response)
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message)
            }
            console.log(error)
        }
    }

    const handleUpdateNote=async()=>{
        try {
            const request= await put(`/notes/updatenotes/${notesId}`,{title:updatenote})
            const response= request.data
            if (response.success) {
                toast.success(response.message)
                setRefresh(!refresh)
              }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message)
            }
            console.log(error)
        }

    }

    const handleDelete=async()=>{
        try {
          const request= await dele(`/notes/deletenote/${notesId}`)
          const response= request.data
          if (response.success) {
            toast.success(response.message)
            setRefresh(!refresh)
          }
        } catch (error) {
          if (error.response) {
            toast.error(error.response.data.message)
          }

        }
      };



  return (
<>
    <NoteModal title={'Create Note'} value={title} handleTitleChange={(e)=>setTitle(e.target.value)} handleCreateNote={handleCreateNote}></NoteModal>
    <UpdateModal title={"Update Notes"} value={updatenote} handleTitleChange={(e)=>setUpdatenote(e.target.value)} handleUpdateNote={handleUpdateNote}></UpdateModal>
    <DeleteModal handleDelete={handleDelete}></DeleteModal>

    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-2 col-md-2 min-vh-100 shadow'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-lg-10 col-md-10'>
                <Navbar></Navbar>
                <div className='mt-3 mx-5'>
                    <h1 className='fs-2 fw-bold'>NOTES</h1>
                </div>

                <div className='row mt-4 mx-5'>
                    {notes && notes.map((elem, index)=>{
                        return(
                            <div className='col-md-4 mb-5 col-lg-4' key={index}>
                                <Notes date={formatDate(elem.createdAt)} title={elem.title} handleUpdate={()=>setNotesID(elem._id)}></Notes>
                            </div>
                        )
                    })}
                    

                </div>

            </div>

        </div>

    </div>

</>  

   
  )
}


export default Home