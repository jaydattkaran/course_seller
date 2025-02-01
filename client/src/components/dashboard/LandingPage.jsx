import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'

function LandingPage() {
  const courses = [
    {
      id: 1,
      title: "web2",
      description: "all about web2",
      button: "view classes"
    },
    {
      id: 2,
      title: "web3",
      description: "all about web3",
      button: "view classes"
    },
    {
      id: 3,
      title: "dsa",
      description: "all about dsa",
      button: "view classes"
    },
  ]
  const facilites = [
    {
      id: 1,
      title: "web2",
      description: "all about web2",
    },
    {
      id: 2,
      title: "web3",
      description: "all about web3",
    },
    {
      id: 3,
      title: "dsa",
      description: "all about dsa",
    },
  ]

  const Course = ({ title, description, button }) => {
    return (
      <div className=''>
        <div className='h-[11rem] w-[17rem] border-2 p-4'>
          <div>{title}</div>
          <div>{description}</div>
          <div>{button}</div>
        </div>
      </div>
    )
  }
  const FacilityCard = ({ title, description }) => {
    return (
      <div className=''>
        <div className='h-[11rem] w-[17rem] border-2 p-4'>
          <div>{title}</div>
          <div>{description}</div>
        </div>
      </div>
    )
  }

  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-col items-center justify-center border-1 my-2'>
        <div className='flex flex-row gap-10 my-14'>
          <div className='flex flex-col w-[30vw] gap-4'>
            <div className='text-4xl font-bold'>Online coaching that delivers results</div>
            <div>Explore our online courses</div>
            <div className='flex flex-row gap-4'>
              <button className='border-1 text-xl rounded-full px-4'>web2</button>
              <button className='border-1 text-xl rounded-full px-4'>web2</button>
              <button className='border-1 text-xl rounded-full px-4'>web2</button>
            </div>
          </div>
          <div className='border-1 w-[20rem] h-[10rem] p-4'>images</div>
        </div>
        <div className='my-10'>
          <div className='text-xl font-bold'>Win up to 90% scholarship || Online</div>
          <div className='flex flex-row gap-10 my-4'>
            {courses.map((course, index) => (
              <Course
                className='flex flex-row'
                key={index}
                {...course}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='my-2 py-14 border-1 flex justify-center'>
        <div className='text-center'>
          <div className='text-3xl font-bold'>Why allen online</div>

          <div className='flex flex-row gap-10 my-4'>
            {facilites.map((facility, index) => (
              <FacilityCard
                className='flex flex-row'
                key={index}
                {...facility}
                index={index}
              />
            ))}
          </div>
          <div>
            <button className='border-1 px-4 py-2 rounded-full'>
              Explore online courses
            </button>
          </div>
        </div>
      </div>
      <div className='my-2 py-14 border-1 flex justify-center'>
        <div className='text-center'>
          <div className='text-3xl font-bold'>Why allen online</div>
          <div className='flex flex-row gap-6 my-10'>
            <div className='h-[15rem] w-[50vw] border-2 p-4'>Web2</div>

          </div>

        </div>
      </div>



      <Outlet />
      <Footer />
    </div>
  )
}

export default LandingPage