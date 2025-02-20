import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      path: "/purchase/webdev",
      id: 1,
      title: "WebDev",
      description: "All about WebDev",
      button: "Register",
    },
    {
      path: "/purchase/web3",
      id: 2,
      title: "WEB3",
      description: "All about web3",
      button: "Register",
    },
    {
      path: "/purchase/dsa",
      id: 3,
      title: "DSA",
      description: "All about dsa",
      button: "Register",
    },
  ];

  const Course = ({ title, description, button, path }) => {
    return (
      <div>
        <Link to={path}>
          <div className="h-[13rem] w-[20rem] bg-neutral-700 rounded-xl p-4 ">
            <div className="text-2xl font-bold">{title}</div>
            <div className="text-gray-300 text-xl">{description}</div>
            <div className="mt-20 text-blue-400 font-semibold cursor-pointer">
              {button}
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="my-4 px-10 py-20 flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Here is all your courses</div>
        <div className="grid grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <Course
              className="flex flex-row"
              key={index}
              {...course}
              index={index}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Courses;
