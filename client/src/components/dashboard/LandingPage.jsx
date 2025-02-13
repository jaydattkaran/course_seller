import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

function LandingPage() {
  const courses = [
    {
      title: "NEET",
      description: ["class 11 | ", "class 12 |", " Dropper"],
      button: "Register",
      icon: "	https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp",
    },
    {
      title: "IIT",
      description: ["class 11 | ", "class 12 |", " Dropper"],
      button: "Register",
      icon: "	https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/438cff9f-f45c-4961-9ab3-33a59b88352c.webp",
    },
    {
      title: "School Preparation",
      description: ["class 6 | ", "class 7 | ", "class 8 ", "More"],
      button: "Register",
      icon: "	https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/ed50a2a8-e5fc-4ce0-bcee-823c32ea49e9.webp",
    },
    {
      title: "UPSC",
      description: "",
      button: "Register",
      icon: "	https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/002e5e6e-47f1-4b21-89e0-8218ffcce066.webp",
    },
    {
      title: "Govt Job Exams",
      description: ["SSC | ", "Banking | ", "Teaching | ", "Judiciary"],
      button: "Register",
      icon: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/8556a2c4-1fd3-4d16-bdfb-62f4afa21310.webp",
    },
    {
      title: "Defence",
      description: ["NDA | ", "CDS | ", "AFCAT | ", "Agniveer"],
      button: "Register",
      icon: "	https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/e6d64e80-ac8a-4393-a9a1-1ef4fbe4fb5c.webp",
    },
  ];
  const feedbacks = [
    {
      message:
        "I used to regularly follow the youtube videos, prelims booster videos and specially editorial discussion from where I made important pointers. I also watched some history videos like Buddhism, Jainism as the topics were explained very clearly… all these were very helpful during my preparation…",
      profile:
        "	https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/f701dd38-826d-4328-836e-8e1061c5d281.jpg",
      name: "Anmol Rathore",
      category: "UPSC",
    },
    {
      message:
        "I am Raja Majhi, and I am thrilled to share that I have secured All India Rank 1 (AIR 1) in the GATE 2024 examination in ECE. From the very beginning, Physics Wallah stood out for its structured and comprehensive curriculum. The faculty members, with their in-depth",
      profile:
        "	https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/5613a51e-e9ac-4e90-a78e-81dba01b1940.png",
      name: "Raja Majhi",
      category: "GATE",
    },
    {
      message:
        "PW helped me in establishing the basics of every subject through which I was able to progress quickly and was also able to increase my speed and also maintaining accuracy.",
      profile:
        "	https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/0274f09e-6be0-40cf-bbfa-f74fb07eb430.png",
      name: "Amit Kumar Mandal",
      category: "Banking",
    },
  ];
  const features = [
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/165756ec-8d87-4a09-9a88-95c342adddea.webp",
      title: "Daily Live",
      description: "Interactive classes",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/ee478abe-a66b-4529-a264-16b61ffb6c51.webp",
      title: "10 Million+",
      description: "Tests, sample papers & notes",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/b75e0c1a-6893-4b31-8d79-f37a1c72115a.webp",
      title: "24x7",
      description: "Doubt solving sessions",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/65d1e4cb-abf8-4bda-9f2c-49f37a714b7a.webp",
      title: "100+",
      description: "Offline centres",
    },
  ];
  const cities = [
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/e7591d9a-54f0-4609-bade-c017952e56cd.webp",
      city: "Kota",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/c3746454-250f-45b1-ad32-57be6ef8574c.webp",
      city: "Barelly",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/94b0e6c1-ef94-470a-ac07-805c0fb72220.webp",
      city: "Patna",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/4f347740-f971-4964-8a51-a800c6a02a48.webp",
      city: "Noida",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/b195ff1c-285c-4b8c-8f96-ae93693dcd68.webp",
      city: "New Delhi",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/d8813e0d-fed9-4ecd-865f-6c18c37cba58.webp",
      city: "Kolkata",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/9e80957d-d2db-4b03-bb1d-8eb5cf5cb5e7.webp",
      city: "Ahmedabad",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/8f0b7608-2333-43c4-9dba-e1e9ef25023f.webp",
      city: "Jaipur",
    },
  ];
  const works = [
    {
      number: "15 Million+",
      label: "Happy Students",
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/fa94a64a-7f6c-49c7-99be-dbf5b4cf440f.webp",
    },
    {
      number: "24000+",
      label: "Mock Tests",
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/112aa59c-9952-4add-8491-e93f2f45b90b.webp",
    },
    {
      number: "14000+",
      label: "Video Lectures",
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/4f6749a2-e834-4c08-81ff-c42330f9bf87.webp",
    },
    {
      number: "80000+",
      label: "Practice Papers",
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/55bb8055-5be9-473e-85b6-1db04b8cc50b.webp",
    },
  ];
  const tags = ["NEET", "JEE", "UPSC", "GATE", "CA"];
  const resources = [
    {
      icon: "	https://static.pw.live/5b09189f7285894d9130ccd0/0d8016b6-7697-4f3a-b841-044458a53b28.webp",
      title: "Notes",
      description:
        "Use Physics Wallah’s detailed study materials that simplify complex ideas into easily understandable language",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/304282d2-af0d-452e-85ec-75aeca4416d2.webp",
      title: "Reference Books",
      description:
        "Our experts have created thorough study materials that break down complicated concepts into easily understandable content",
    },
    {
      icon: "https://static.pw.live/5b09189f7285894d9130ccd0/6e24a02c-6f90-417c-b315-eda243043083.webp",
      title: "NCERT Solutions",
      description:
        "Unlock academic excellence with Physics Wallah’s NCERT Solutions which provides you step-by-step solutions",
    },
  ];

  const Work = ({ index, number, icon, label }) => {
    return (
      <div>
        <div className="rounded-xl px-10  gap-6 flex bg-gray-800 flex-col justify-between">
          <div className="flex flex-col pt-16 pb-4 items-center">
            <div className="text-4xl font-bold">{number}</div>
            <div className="text-xl">{label}</div>
          </div>
          <div className="flex justify-center">
            <img src={icon} alt="" className="h-20 w-20" />
          </div>
        </div>
      </div>
    );
  };
  const City = ({ index, icon, city }) => {
    return (
      <div
        className="w-[15rem] p-2 h-[5rem] rounded-md 
      flex items-center gap-4 border-1 border-gray-600 hover:border-gray-400 duration-200"
      >
        <div>
          <img src={icon} alt="icon" className="w-14 h-14 rounded" />
        </div>
        <div className="font-bold">{city}</div>
      </div>
    );
  };
  const Feature = ({ index, icon, title, description }) => {
    return (
      <div className=" p-6">
        <div className="flex justify-center">
          <img src={icon} alt="" className="w-10 h-10" />
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="items-center text-lg font-semibold">{title}</div>
          <div>{description}</div>
        </div>
      </div>
    );
  };
  const Course = ({ title, description, button, icon }) => {
    return (
      <div>
        <div
          className="h-[13rem] w-[20rem] bg-gray-800 rounded-xl p-4
        flex flex-row justify-between"
        >
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-2xl font-bold">{title}</div>
              <div className="text-gray-300 text-xl">{description}</div>
            </div>
            <div className="text-blue-400 font-semibold cursor-pointer">
              {button}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={icon} alt="" className="w-16 h-16" />
          </div>
        </div>
      </div>
    );
  };
  const Feedback = ({ message, name, category, profile }) => {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col rounded justify-between gap-6 w-[20rem] bg-gray-800 px-4 py-6">
          <div className="text-md">{message}</div>
          <div className="flex flex-row gap-2">
            <div>
              <img src={profile} alt="" className="h-8 w-8 rounded-full" />
            </div>
            <div className="flex flex-col">
              <div>{name}</div>
              <div className="text-sm text-blue-400 font-semibold">
                {category}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="">
      <Navbar />
      <section>
        <div className="flex justify-center">
          <img
            src="	https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/d5a25fa6-4572-4b5e-8936-dccea03b4acb.webp"
            alt="carousel"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-center items-center py-10 gap-20">
          <div className="w-[25%] flex flex-col gap-2">
            <div className="text-4xl font-bold">
              Bharat's{" "}
              <span className="text-purple-600">Trusted & Affordable</span>
              Educational Platform
            </div>
            <div className="text-md">
              Unlock your potential by signing up with Physics Wallah- The most
              affordable learnig solution
            </div>
            <button className="mt-6 border-none font-semibold h-10 w-[50%] px-4 rounded-lg bg-purple-700">
              Get Started
            </button>
          </div>
          <img
            src="/public/assets/hero-student-w.webp"
            alt="img"
            className="h-[20rem] w-[35rem]"
          />
        </div>

        <div className="flex flex-row gap-10 rounded bg-gray-800 w-[60%] mx-auto justify-center">
          {features.map((feature, index) => (
            <Feature
              className="flex flex-row"
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center py-20">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold">Exam Categories</div>
            <div className="text-lg">
              PW is preparing students for 35+ exam catogories. Scroll down to
              find the one you are preparing for
            </div>
          </div>
          <div className="flex py-10 justify-center">
            <div className="grid grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <Course key={index} {...course} index={index} />
              ))}
            </div>
          </div>
          <div className="text-purple-600 text-xl font-semibold underline">
            View All Categories (19)
          </div>
        </div>

        <div className="relative flex flex-col items-center py-10 gap-10">
          <video
            src="https://static.pw.live/5b09189f7285894d9130ccd0/7c44087d-aff1-438d-aa67-2a493c48504f.mp4"
            playsInline
            autoPlay
            loop
            controlsList="nofullscreen nodownload noremoteplayback"
            className="opacity-40 h-[85%] w-full m-auto sm:flex items-center absolute top-0 z-0"
            style={{ objectFit: "cover" }}
          ></video>
          <div className="z-100">
            <div className="flex mt-10 flex-col items-center">
              <div className="text-3xl font-bold">
                Explore Tech-Enabled Offline Vidyapeeth Centres
              </div>
              <div className="text-lg">
                Creating new benchmarks in learning experiences
              </div>
            </div>
            <div className="px-6 rounded-xl mt-10 py-10 bg-gray-800 flex flex-col gap-4 h-[60%]">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">
                  Find Vidyapeeth Centre in your city
                </div>
                <div>Available in 105 cities</div>
              </div>

              <div className="grid p-4 grid-cols-4 gap-4">
                {cities.map((city, index) => (
                  <City key={index} {...city} index={index} />
                ))}
              </div>
              <div className="flex justify-center">
                <button className="border-none font-bold h-10 px-16 rounded-lg bg-purple-700 text-white">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-10 gap-10">
          <div className="flex flex-col items-center gap-3">
            <div className="text-4xl font-bold">
              A Platform Trusted by Students
            </div>
            <div>
              Physics Wallah aims to transform not just through words, but
              proide results with numbers!
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {works.map((work, index) => (
              <Work key={index} {...work} index={index} />
            ))}
          </div>

          <button className="border-none font-bold h-12 py-2 px-16 rounded-lg bg-purple-700 text-lg text-white">
            View More
          </button>
        </div>

        <div className="flex justify-center py-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-3">
              <div className="text-4xl font-bold">
                Academic Excellence : Results
              </div>
              <div>Giving wings to a millions dreams, a million more to go</div>
            </div>

            <div className="py-2 flex justify-center">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="border-1 px-2 py-1 m-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <img
                src="	https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/664fccf5-80c4-49e4-b335-c5a9eb08d418.jpeg"
                alt="images"
                className="w-[60rem] h-[25rem] rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <div className="flex justify-between gap-10 bg-gray-800 rounded-lg h-[25rem] w-[60rem] px-10 pt-16">
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-bold">
                Join 15 Million students on the app today!
              </div>
              <div className="text-lg flex flex-col gap-2">
                <div>Live & recorded classes available at ease</div>
                <div>Dashboard for progress tracking</div>
                <div>Lakhs of practice questions</div>
              </div>
              <div className="flex flex-row gap-4">
                <img
                  src="/public/assets/google-play-badge.171251c3.webp"
                  alt="playstore"
                  className="w-34 h-10"
                />
                <img
                  src="/public/assets/apple-store-badge.acb101ce.webp"
                  alt="appstore"
                  className="w-34 h-10"
                />
              </div>
            </div>
            <img
              src="/public/assets/download-app-right-image.aaca3c09.webp"
              alt="image"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 py-10">
          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl font-bold">Students ❤️ Physics Wallah</div>
            <div>Hear from our students</div>
          </div>
          <div className="flex gap-6 p-4 rounded bg-gray-800 w-[60%] mt-6">
            <img
              src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/6ce6e71a-1cba-4fff-a325-55b3376e96e2.png"
              alt="video"
              className="w-[13rem]"
            />
            <div className="p-2 flex flex-col justify-between gap-20">
              <div>
                My name is Tathagat Awatar. I secured All India Rank 1 by
                scoring full score in NEET UG 2024. I started my preparation
                with Physics Wallah in 12th grade by joining the Lakshya NEET
                batch, then I took 2 drop by joining Yakeen NEET batch and I
                completed my full preparation from online PW batch. PW teachers
                and their guidance helps me to acheive AIR1 and motivated me
                during my drop year....
              </div>
              <div>
                <div className="text-xl font-bold">Multiple Rankers</div>
                <div className="text-blue-400">
                  AIR 1, AIR 86 and other | Neet
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 py-10">
          {feedbacks.map((feedback, index) => (
            <Feedback key={index} {...feedback} index={index} />
          ))}
        </div>

        <div className="flex flex-col items-center py-10">
          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl font-bold">Study Resources</div>
            <div>
              A diverse array of learning materials to enhance your educational
              journey.
            </div>
          </div>
          <div className="flex flex-row gap-4 py-10">
            {resources.map((resource, index) => (
              <span
                key={index}
                {...resource}
                index={index}
                className="flex flex-col gap-6 bg-gray-800 justify-between px-6 py-10 m-1 w-[25rem] rounded-md"
              >
                <div>
                  <div className="text-2xl font-bold">{resource.title}</div>
                  <div>{resource.description}</div>
                </div>
                <div className="flex justify-center">
                  <img src={resource.icon} alt="" className="h-40 w-40" />
                </div>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 py-10 items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="text-4xl font-bold">Join The PW Family, Today!</div>
            <div>
              Explore our 130+ YouTube Channels and subscribe to get access to
              quality education for free.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-4 px-20 rounded-lg bg-gray-800">
            <img
              src="/public/assets/gold-button.c9e30207.webp"
              alt="carousel"
            />
            <div className="text-2xl font-bold">Physcis Wallah</div>
            <div>11.5M <span>Subscribers</span></div>
          </div>
          <button className="border-none font-semibold h-10 px-4 rounded-lg bg-purple-700">
            Get Started
          </button>
        </div>
      </section>
      <Outlet />
      <Footer />
    </main>
  );
}

export default LandingPage;
