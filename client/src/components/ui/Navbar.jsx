import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center h-18 w-full px-20 gap-20 py-4 border-1'>
        <div className='text-4xl font-bold items-center'>Allen</div>
        <ul className='flex font-semibold items-center flex-row gap-8'>
            <li><Link>Courses</Link></li>
            <li><Link>Test Series</Link></li>
            <li><Link>Scholarships</Link></li>
            <li><Link>Results</Link></li>
            <li><Link>Study Materials</Link></li>
            <li><Link>About us</Link></li>
        </ul>
        <button className='border-none font-semibold uppercase h-8 px-4 rounded-full bg-blue-700'>Talk to us</button>
        <div className='text-2xl font-bold items-center'>User</div>
    </div>
  )
}

export default Navbar