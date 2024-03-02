import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import React from 'react'
import Members from './Components/Members.jsx'
import Home from './Home.jsx'
import Events from './Events.jsx'
import { Route, Routes } from 'react-router-dom'


function Front() {
  return (
    <div>
      <Navbar/>



      <Routes>
    
       <Route path='/' element={<Home/>}/>
       <Route path='/events' element={<Events/>}/>
       <Route path='/members' element={<Members/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Front
