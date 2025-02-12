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
    },
    {
      title: "IIT",
      description: ["class 11 | ", "class 12 |", " Dropper"],
      button: "Register",
    },
    {
      title: "School Preparation",
      description: ["class 6 | ", "class 7 | ", "class 8 ", "More"],
      button: "Register",
    },
    {
      title: "UPSC",
      description: "",
      button: "Register",
    },
    {
      title: "Govt Job Exams",
      description: ["SSC | ", "Banking | ", "Teaching | ", "Judiciary"],
      button: "Register",
    },
    {
      title: "Defence",
      description: ["NDA | ", "CDS | ", "AFCAT | ", "Agniveer"],
      button: "Register",
    },
  ];
  const feedbacks = [
    {
      message:
        "I used to regularly follow the youtube videos, prelims booster videos and specially editorial discussion from where I made important pointers. I also watched some history videos like Buddhism, Jainism as the topics were explained very clearly… all these were very helpful during my preparation…",
      profile: "image",
      name: "Anmol Rathore",
      category: "UPSC",
    },
    {
      message:
        "I am Raja Majhi, and I am thrilled to share that I have secured All India Rank 1 (AIR 1) in the GATE 2024 examination in ECE. From the very beginning, Physics Wallah stood out for its structured and comprehensive curriculum. The faculty members, with their in-depth",
      profile: "image",
      name: "Raja Majhi",
      category: "GATE",
    },
    {
      message:
        "PW helped me in establishing the basics of every subject through which I was able to progress quickly and was also able to increase my speed and also maintaining accuracy.",
      profile: "image",
      name: "Amit Kumar Mandal",
      category: "Banking",
    },
  ];
  const features = [
    {
      icon: "img",
      title: "Daily Live",
      description: "Interactive classes",
    },
    {
      icon: "img",
      title: "10 Million+",
      description: "Tests, sample papers & notes",
    },
    {
      icon: "img",
      title: "24x7",
      description: "Doubt solving sessions",
    },
    {
      icon: "img",
      title: "100+",
      description: "Offline centres",
    },
  ];
  const cities = [
    {
      icon: "icon",
      city: "Kota",
    },
    {
      icon: "icon",
      city: "Barelly",
    },
    {
      icon: "icon",
      city: "Patna",
    },
    {
      icon: "icon",
      city: "Noida",
    },
    {
      icon: "icon",
      city: "New Delhi",
    },
    {
      icon: "icon",
      city: "Kolkata",
    },
    {
      icon: "icon",
      city: "Ahmedabad",
    },
    {
      icon: "icon",
      city: "Jaipur",
    },
  ];
  const works = [
    {
      number: "15 Million+",
      label: "Happy Students",
    },
    {
      number: "24000+",
      label: "Mock Tests",
    },
    {
      number: "14000+",
      label: "Video Lectures",
    },
    {
      number: "80000+",
      label: "Practice Papers",
    },
  ];
  const tags = ["NEET", "JEE", "UPSC", "GATE", "CA"];

  const resources = [
    {
      title: "Notes",
      description:
        "Use Physics Wallah’s detailed study materials that simplify complex ideas into easily understandable language",
    },
    {
      title: "Reference Books",
      description:
        "Our experts have created thorough study materials that break down complicated concepts into easily understandable content",
    },
    {
      title: "NCERT Solutions",
      description:
        "Unlock academic excellence with Physics Wallah’s NCERT Solutions which provides you step-by-step solutions",
    },
  ];

  const Work = ({ index, number, label }) => {
    return (
      <div>
        <div>{number}</div>
        <div>{label}</div>
      </div>
    );
  };

  const City = ({ index, icon, city }) => {
    return (
      <div>
        <div>{icon}</div>
        <div>{city}</div>
      </div>
    );
  };

  const Feature = ({ index, icon, title, description }) => {
    return (
      <div>
        <div>{icon}</div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    );
  };
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
  const Feedback = ({ message, name, category, profile }) => {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-[20rem] border-1 p-2">
          <div>{message}</div>
          <div className="flex flex-row gap-2">
            <div>{profile}</div>
            <div className="flex flex-col">
              <div>{name}</div>
              <div>{category}</div>
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
          <img src="" alt="carousel" />
        </div>
        <div className="flex flex-col items-center py-10 gap-10">
          <div>
            <div>
              Bharat's <span>Trusted & Affordable</span>Educational Platform
            </div>
            <div>
              Unlock your potential by signing up with Physics Wallah- The most
              affordable learnig solution
            </div>
            <button className="border-none font-semibold h-10 px-4 rounded-lg bg-purple-700">
              Get Started
            </button>
          </div>
          <img src="" alt="img" />
        </div>

        <div className="flex flex-row gap-10 justify-center">
          {features.map((feature, index) => (
            <Feature
              className="flex flex-row"
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center py-10">
          <div>
            <div>Exam Categories</div>
            <div>
              PW is preparing students for 35+ exam catogories. Scroll down to
              find the one you are preparing for
            </div>
          </div>
          <div className="flex py-10 justify-center">
            <div className="grid grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <Course key={index} {...course} index={index} />
              ))}
            </div>
          </div>
          <div className="text-purple-600 text-xl font-semibold underline">
            View All Categories (19)
          </div>
        </div>

        <div className="flex flex-col items-center py-10 gap-10">
          <div>
            <div>Explore Tech-Enabled Offline Vidyapeeth Centres</div>
            <div>Creating new benchmarks in learning experiences</div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Find Vidyapeeth Centre in your city</div>
            <div>Available in 105 cities</div>

            <div className="grid grid-cols-4 gap-4">
              {cities.map((city, index) => (
                <City key={index} {...city} index={index} />
              ))}
            </div>
            <button className="border-none font-semibold h-10 px-4 rounded-lg bg-purple-700">
              View More
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center py-10 gap-10">
          <div>
            <div>A Platform Trusted by Students</div>
            <div>
              Physics Wallah aims to transform not just through words, but
              provide results with numbers!
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {works.map((work, index) => (
              <Work key={index} {...work} index={index} />
            ))}
          </div>

          <button className="border-none font-semibold h-10 px-4 rounded-lg bg-purple-700">
            View More
          </button>
        </div>

        <div className="flex justify-center py-10">
          <div className="flex flex-col gap-4">
            <div>
              <div>Academic Excellence : Results</div>
              <div>Giving wings to a millions dreams, a million more to go</div>
            </div>

            <div className="py-2">
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
              <img src="" alt="images" />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <div className="flex gap-10">
            <div>
              <div>Join 15 Million students on the app today!</div>
              <div>Live & recorded classes available at ease</div>
              <div>Dashboard for progress tracking</div>
              <div>Lakhs of practice questions</div>
              <div>
                <img src="" alt="playstore" />
                <img src="" alt="appstore" />
              </div>
            </div>
            <img src="" alt="image" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 py-10">
          <div>
            <div>Students ❤️ Physics Wallah</div>
            <div>Hear from our students</div>
          </div>
          <div className="flex gap-2 w-[50rem]">
            <img src="" alt="video" className="w-[10rem]" />
            <div className="border-1 p-2 w-[40rem]">
              <img src="" alt="icon" />
              <div>
                My name is Tathagat Awatar. I secured All India Rank 1 by
                scoring full score in NEET UG 2024. I started my preparation
                with Physics Wallah in 12th grade by joining the Lakshya NEET
                batch, then I took 2 drop by joining Yakeen NEET batch and I
                completed my full preparation from online PW batch. PW teachers
                and their guidance helps me to acheive AIR1 and motivated me
                during my drop year....
              </div>
              <div>Multiple Rankers</div>
              <div>AIR 1, AIR 86 and other | Neet</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 py-10">
          {feedbacks.map((feedback, index) => (
            <Feedback key={index} {...feedback} index={index} />
          ))}
        </div>

        <div className="flex flex-col items-center py-10">
          <div>
            <div>Study Resources</div>
            <div>
              A diverse array of learning materials to enhance your educational
              journey.
            </div>
          </div>
          <div className="flex flex-row gap-2 py-2">
            {resources.map((resource, index) => (
              <span
                key={index}
                {...resource}
                index={index}
                className="border-1 px-2 py-1 m-1 rounded-md"
              >
                <div>{resource.title}</div>
                <div>{resource.description}</div>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 py-10 items-center">
          <div>
            <div>Join The PW Family, Today!</div>
            <div>
              Explore our 130+ YouTube Channels and subscribe to get access to
              quality education for free.
            </div>
          </div>
          <img src="" alt="carousel" />
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
