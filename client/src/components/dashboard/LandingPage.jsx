import React from 'react'
import { Outlet } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <div>LandingPage</div>
    <Outlet/>
    </>
  )
}

export default LandingPage