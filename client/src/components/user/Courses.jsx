import React from 'react'

function Courses() {
  const courses =[
    {
      id:1,
      title: "web2",
      description: "all about web2",
      button: "view classes"
    },
    {
      id:2,
      title: "web3",
      description: "all about web3",
      button: "view classes"
    },
    {
      id:3,
      title: "dsa",
      description: "all about dsa",
      button: "view classes"
    },
  ]

  const Course = ({title, description, button}) => {
    return(
      <div className=''>
        <div className='h-[11rem] w-[17rem] border-2 p-4'>
          <div>{title}</div>
          <div>{description}</div>
          <div>{button}</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='border-1 border-amber-300 my-4 px-10 py-20 flex flex-col gap-10'>
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