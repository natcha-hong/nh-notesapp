import React, { useState } from 'react'
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";


const Notes = ({title,date,handleUpdate,handelDelete}) => {
    
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }

  return (
    
<div className='card position-relative' style={{width:"18rem",backgroundColor:"#FFF2F2", color:"#B7B1F2"}}>
  <div className='card-body position-relative'>
    <h5 className='card-title'>{title}</h5>
    <div className='bottomContent'>
        <div className='date d-flex justify-content-between align-items-center'>
            <h5 className='fs-6'>{date}</h5>

            {
                show && (
                    <div className='dropdown'>
                <FaPencil size={20} color='#578FCA' cursor={"pointer"} data-bs-toggle="modal" data-bs-target="#updatemodal" onClick={handleUpdate} />
                <RiDeleteBin5Line size={23} color='red' cursor={"pointer"} data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={handelDelete} />
            </div>
                )
            }

            <div className='' onClick={handleShow}>
            <PiDotsThreeOutlineVerticalBold size={25} color='#98D8EF' cursor={"pointer"}></PiDotsThreeOutlineVerticalBold>
            </div>
        </div>
    </div>
  </div>
</div>


  )
}

export default Notes