import React from 'react'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Signup />} />
         <Route path='/login' element={<Login />} />
 
         <Route path='/home' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App;