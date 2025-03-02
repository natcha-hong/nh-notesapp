import React from 'react'
import { TbMessage2Plus } from "react-icons/tb";

const Sidebar = () => {
  return (
      <div className='mt-5 mx-5'>

        <img src="/Avatar_Cyber.jpg" alt="Avatar" style={{width:'60px', height:"60px"}}/>
        <h1 className='fs-4 fw-bold' style={{color:"#AA60C8"}}> Ideas?! </h1>
        <h2 className='fs-5' style={{color:"#4D55CC"}}>on your digital notepad.</h2>

        <div className='mt-5 mx-2 rounded-circle d-flex justify-content-center align-items-center' style={{backgroundColor:"#FDB7EA",height:"50px",width:"50px",cursor:"pointer"}}
        data-bs-toggle="modal" data-bs-target="#exampleModal">
            <TbMessage2Plus size={30} className='text-white'></TbMessage2Plus>
        </div>
    </div>

  )
}

export default Sidebar