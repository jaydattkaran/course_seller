import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

function LandingPage() {
  const courses = [
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
  ];
  const facilites = [
    {
      id: 1,
      title: "Kota Faculty",
      description:
        "Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years",
    },
    {
      id: 2,
      title: "Proven Results",
      description:
        "Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams",
    },
    {
      id: 3,
      title: "Learning Tools",
      description:
        "24x7 doubt resolution and customized study material to test, and improve continuously",
    },
    {
      id: 4,
      title: "Mentor Support",
      description:
        "Regular mentorship sessions with faculty, guidance on exam strategy and updates to parents",
    },
  ];

  const Course = ({ title, description, button }) => {
    return (
      <div>
        <div className="h-[13rem] w-[20rem] bg-neutral-700 rounded-xl p-4 ">
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-gray-300 text-xl">{description}</div>
          <div className="mt-20 text-blue-400 font-semibold cursor-pointer">
            {button}
          </div>
        </div>
      </div>
    );
  };
  const FacilityCard = ({ title, description }) => {
    return (
      <div className="">
        <div className="h-[11rem] w-[17rem] bg-black rounded-xl p-4">
          <div className="font-bold text-2xl mb-4">{title}</div>
          <div className="text-gray-300">{description}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center my-2">
        <div className="flex flex-row gap-10 my-14">
          <div className="flex flex-col w-[30vw] gap-4">
            <div className="text-4xl font-bold">
              Online coaching that delivers results
            </div>
            <div className="text-gray-400 text-xl font-semibold">
              Explore our online courses
            </div>
            <div className="flex flex-row gap-4">
              <button className="border-2 h-10 border-blue-700 text-xl rounded-full px-4">
                WEB2
              </button>
              <button className="border-2 h-10 border-blue-700 text-xl rounded-full px-4">
                WEB3
              </button>
              <button className="border-2 h-10 border-blue-700 text-xl rounded-full px-4">
                DSA
              </button>
            </div>
          </div>
          <div className="w-[25rem] h-[15rem]">
            <img src="/src/assets/img.avif" alt="" />
          </div>
        </div>
        <div className="my-10">
          <div className="text-3xl font-bold">
            Win up to 90% scholarship || Online Scholarship
          </div>
          <div className="flex flex-row gap-10 my-4">
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
      <div className="my-2 py-14 bg-neutral-900 flex justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold mb-16">Why ALLEN Online</div>

          <div className="flex flex-row gap-10 my-4">
            {facilites.map((facility, index) => (
              <FacilityCard
                className="flex flex-row"
                key={index}
                {...facility}
                index={index}
              />
            ))}
          </div>
          <div>
            <button className="bg-blue-600 text-white font-semibold text-lg cursor-pointer mt-8 px-4 py-2 rounded-full">
              Explore online courses
            </button>
          </div>
        </div>
      </div>
      <div className="my-2 py-14 flex justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold">What's Trending</div>
          <div className="flex flex-row gap-6 my-10">
            <div className="p-4">
              <img src="/src/assets/img.avif" alt="" className="h-[20rem]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <form className="border-1 border-gray-600 rounded-xl w-[40vw] h-[32rem] p-6">
          <div className="text-2xl font-bold mb-2">Request a callback</div>
          <hr />
          <div className="flex flex-col gap-4 mt-2">
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg font-medium text-gray-200">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold text-lg cursor-pointer px-4 py-2 rounded-full w-[10rem] mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Outlet />
      <Footer />
    </div>
  );
}

export default LandingPage;
