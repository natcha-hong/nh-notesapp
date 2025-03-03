import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../../services/ApiEndPoint'
import toast from 'react-hot-toast';


const Register = () => {
  const navigate=useNavigate()
  const[value,setValue]=useState({
    userName:"",
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const request= await post('/auth/register',value)
      const response= request.data
      if (response.success) {
        toast.success(response.message)
        navigate('/login')
      }
      console.log("object",response)
    } catch (error) {
      if (error.response) {
      toast.error(error.response.data.message)
      }
    }
  }


  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center" >
      <div className="form-container border shadow p-5 rounded-4 w-50" style={{backgroundColor:"#E8F9FF", color:"#4635B1"}}>
        <h2 className="text-center mb-4 fw-bold">Register</h2>
        <form className="d-flex flex-column" onSubmit={handleSubmit}>

          <div className="form-group mb-3">
            <label htmlFor="Name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={value.userName}
              onChange={handleChange}
              placeholder="Name"
              aria-label="Email"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={value.email}
              onChange={handleChange}
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={value.password}
              onChange={handleChange}
              placeholder="Enter your password"
              id="password"
            />
          </div>

          <button className='btn btn-success w-100 mb3' >Register</button>

          <div className='text-center'>
            <p>Already have an account <Link to={'/login'}>Login</Link></p>
          </div>
          
        </form>
      </div>
    </div>

  )
}

export default Register