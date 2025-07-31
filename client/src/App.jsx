import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBookings from './pages/owner/ManageBookings'
import Login from './components/Login'
const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwner = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin}/>}
      {!isOwner && <Navbar setShowLogin={setShowLogin}/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cars' element={<Cars></Cars>}/>
        <Route path='/car-details/:id' element={<CarDetails></CarDetails>}/>
        <Route path='/my-bookings' element={<MyBookings></MyBookings>}></Route>
        <Route path='/owner' element={<Layout/>} >
          <Route index element={<Dashboard/>} /> 
          <Route path='add-car' element={<AddCar/>} />
          <Route path='manage-cars' element={<ManageCars/>} />
          <Route path='manage-bookings' element={<ManageBookings/>} />
        </Route>
      </Routes>
      {!isOwner && <Footer/>}
    </>
  )
}

export default App
