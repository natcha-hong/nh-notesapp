import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import {Toaster} from 'react-hot-toast'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    
<>
<BrowserRouter>
<Toaster/>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/register' element={<Register></Register>}></Route>

</Routes>

</BrowserRouter>

</>

  )
}

export default App