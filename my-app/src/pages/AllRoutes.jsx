import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'

import Projects from './Projects'
import Skills from './Skills'
import Contacts from './Contacts'



const AllRoutes = () => {
  return (
   <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/contact' element={<Contacts/>}/>
   
   </Routes>
  )
}

export default AllRoutes