import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Home from './components/Homes/Home'
import Service from './components/Service'
import ServiceCategory from './components/ServiceCategory'
// import Cart from './components/UserCart'
import UserCart from './components/UserCart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddService from './components/Homes/AddService'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/registraion' element={<Registration/>}></Route>
      <Route path='/services' element={<Service/>}></Route>
      <Route path='/services/:category' element={<ServiceCategory/>}></Route>
      <Route path='/user/cart' element={<UserCart/>}></Route>
      <Route path='/addservice' element={<AddService/>}></Route>
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App