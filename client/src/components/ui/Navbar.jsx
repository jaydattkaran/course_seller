import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center h-18 w-full px-20 gap-20 py-4'>
        <div className='text-2xl font-bold items-center'>PW</div>
        <ul className='flex font-semibold items-center flex-row gap-8'>
            <li><Link>Vidyapeeth</Link></li>
            <li><Link>Upskilling-Job Assistance</Link></li>
            <li><Link>PW Store(Books)</Link></li>
            <li><Link>REAL Test</Link></li>
        </ul>
        <button className='border-none font-semibold h-10 px-4 rounded-lg bg-purple-700'>Login/Register</button>
    </div>
  )
}

export default Navbar