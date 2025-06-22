import React, { useState,useEffect } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Routes,Route, Navigate, useNavigate } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer, toast } from 'react-toastify';


export const backend_url=import.meta.env.VITE_BACKEND_URL
export const currency ="$"
const App = () => {
  const navigate=useNavigate();

  const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):"")

  useEffect(()=>{
     localStorage.setItem('token',token);
  },[token])

  // useEffect(()=>{
  //   navigate('/add')
  // },[])
  return (
    <div className='bg-gray-50 min-h-screen'>
       <ToastContainer />
      {
        token==="" ?<Login setToken={setToken}/>
        : <>

      <NavBar setToken={setToken}/>
      <hr className='opacity-15'/>
      <div className='flex w-full'>
      <SideBar/>
      <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-7 text-gray-600 text-base'>
        <Routes>
          <Route path='/add' element={<Add token={token}/>}/>
          <Route path='/list' element={<List token={token}/>}/>
          <Route path='/orders' element={<Orders token={token}/>}/>
        </Routes>
      </div>
      </div>
      </>
      }
      
      
    </div>
  )
}

export default App