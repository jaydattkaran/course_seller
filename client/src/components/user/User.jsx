import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'

export default function User() {
  return (
    <>
    <Navbar/>
    <div className='border-2 border-red-500 my-6 px-10 text-4xl font-bold' >Welcome back User</div>
    <Outlet/>
    <Footer/>
    </>
  )
}
