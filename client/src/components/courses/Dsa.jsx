import React from 'react'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'

export default function Dsa() {
  const features = [
    {
      id: 1,
      icon: "icon",
      title: "trending tech",
      description: "Daily live interactive classes led by ALLEN's national-level faculty, who have mentored countless AIR #1 and thousands of students who have made it to India's top IITs."
    },
    {
      id: 2,
      icon: "icon",
      title: "trending tech",
      description: "Daily live interactive classes led by ALLEN's national-level faculty, who have mentored countless AIR #1 and thousands of students who have made it to India's top IITs."
    },
    {
      id: 3,
      icon: "icon",
      title: "trending tech",
      description: "Daily live interactive classes led by ALLEN's national-level faculty, who have mentored countless AIR #1 and thousands of students who have made it to India's top IITs."
    },
    {
      id: 4,
      icon: "icon",
      title: "trending tech",
      description: "Daily live interactive classes led by ALLEN's national-level faculty, who have mentored countless AIR #1 and thousands of students who have made it to India's top IITs."
    },
  ]

  const Feature = ({ icon, title, description }) => {
    return (
      <div className='border-1 m-4 p-4'>
        <div>{icon}</div>
        <div className='text-xl font-bold'>{title}</div>
        <div>{description}</div>
      </div>
    )
  }

  return (
    <>
      <Navbar/>
    
      <div className='flex flex-col items-center justify-center border-1 my-4 '>
        <div className='flex flex-row gap-10 my-14'>
          <div className='flex flex-col w-[30vw] gap-4'>
            <div className='text-4xl font-bold'>Online coaching for DSA</div>
            <div>WEB2 online coaching by allen online helps you secure high paying job</div>
            <div>With 36 years of expertise, live classes from ALLEN Kota faculty, and the best study materials, ALLEN Online sets you up for JEE success.</div>
            <div className='flex flex-row gap-4'>
              <button className='border-1 text-xl rounded-full px-10 py-2'>Know more</button>
              <button className='border-1 text-xl rounded-full px-10 py-2'>Talk to us</button>
            </div>
          </div>
          <div className='border-1 w-[20rem] h-[10rem] p-4'>images</div>
        </div>

        <div className='w-[70vw] my-10'>
          <div className='flex justify-center mb-10 text-3xl font-bold'>Dicover why it is important</div>
          <div className='grid grid-cols-2 px-10'>
            {features.map((feature, index) => (
              <Feature
                key={index}
                {...feature}
                index={index} />
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
