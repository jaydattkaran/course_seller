import React from 'react'

function Courses() {
  const courses =[
    {
      id: 1,
      title: "WEB2",
      description: "All about web2",
      button: "Register",
    },
    {
      id: 2,
      title: "WEB3",
      description: "All about web3",
      button: "Register",
    },
    {
      id: 3,
      title: "DSA",
      description: "All about dsa",
      button: "Register",
    },
  ]

  const Course = ({title, description, button}) => {
    return(
      <div>
      <div className="h-[13rem] w-[20rem] bg-neutral-700 rounded-xl p-4 ">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-gray-300 text-xl">{description}</div>
        <div className="mt-20 text-blue-400 font-semibold cursor-pointer">
          {button}
        </div>
      </div>
    </div>
    )
  }

  return (
    <div>
      <div className='my-4 px-10 py-20 flex flex-col gap-10'>
        <div className='text-2xl font-bold'>Here is all your courses</div>
        <div className='flex flex-row gap-10'>

        {courses.map((course,index) => (
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
  )
}

export default Courses