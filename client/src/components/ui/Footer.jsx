import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons"

const Footer = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex justify-center pt-10 gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/public/assets/favicon.ico"
              alt="logo"
              className="h-10 w-10"
            />
            <div className="text-xl font-bold">Physics Wallah</div>
          </div>
          <div className="text-xs w-[30rem]">
            We understand that every student has unique needs and abilities,
            that's why our curriculum is designed to adapt to your needs and
            help you grow!
          </div>
          <div className="flex gap-4">
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
          <div>
            <div className="text-lg font-semibold">Let's get social :</div>
            <div>
              <ul className="flex gap-4">
                <li className="cursor-pointer"><SocialIcon url="https://facebook.com"/></li>
                <li className="cursor-pointer"><SocialIcon url="https://instagram.com"/></li>
                <li className="cursor-pointer"><SocialIcon url="https://youtube.com"/></li>
                <li className="cursor-pointer"><SocialIcon url="https://linkedin.in"/></li>
                <li className="cursor-pointer"><SocialIcon url="https://twitter.com"/></li>
                <li className="cursor-pointer"><SocialIcon url="https://telegram.com"/></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-center pb-20">
          <div>
            <div className="footer_links text-xl mb-2 font-semibold">
              Company
            </div>
            <ul>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Updates</Link>
              </li>
              <li>
                <Link>Blogs</Link>
              </li>
              <li>
                <Link>Account Deletion</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer_links text-xl font-bold">Our Centres</div>
            <ul>
              <li>
                <Link>New Delhi</Link>
              </li>
              <li>
                <Link>Patna</Link>
              </li>
              <li>
                <Link>Kota</Link>
              </li>
              <li>
                <Link>Noida</Link>
              </li>
              <li>
                <Link>Dhanbad</Link>
              </li>
              <li>
                <Link>Varanasi</Link>
              </li>
              <li>
                <Link>View All</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer_links text-xl font-bold">Popular Exams</div>
            <ul>
              <li>
                <Link>IIT JEE</Link>
              </li>
              <li>
                <Link>NEET</Link>
              </li>
              <li>
                <Link>GATE</Link>
              </li>
              <li>
                <Link>NDA</Link>
              </li>
              <li>
                <Link>UPSC</Link>
              </li>
              <li>
                <Link>School Prep</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer_links text-xl font-bold">
              Connect With Us
            </div>
            <ul>
              <li>
                <Link>Email Us</Link>
              </li>
              <li>
                <Link>Talk to a Counselor</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer_links text-xl font-bold">Quick Links</div>
            <ul>
              <li>
                <Link>PW Preena</Link>
              </li>
              <li>
                <Link>PW SIP</Link>
              </li>
              <li>
                <Link>PW Gurukulam</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer_links text-xl font-bold">Our Products</div>
            <ul>
              <li>
                <Link>PW App Learning</Link>
              </li>
              <li>
                <Link>PW Offline Payments (Fin-Z)</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-[60vw] mx-auto" />
      <div
        className="flex flex-col gap-4 items-center justify-center
      py-10"
      >
        <div className="max-w-[70vw]">
          <div className="text-xl font-semibold mb-2">Know about Physics Wallah</div>
          <div>
            Physics Wallah is an Indian online education platform, that provides
            accessible & comprehensive learning experiences to students of
            classes 6 to 12 and those preparing for JEE and NEET exams. We also
            provide extensive NCERT solutions, sample papers, NEET, JEE Mains,
            BITSAT previous year papers, which makes us a one-stop solution for
            all resources. Physics Wallah also caters to over 3.5 million
            registered students and over 78 lakh+ Youtube subscribers with 4.8
            rating on its app.
          </div>
        </div>
        <div className="max-w-[70vw]">
          <div className="text-xl font-semibold mb-2">We Stand Out because</div>
          <div>
            We successfully provide students with intensive courses by India's
            qualified & experienced faculties. PW strives to make the learning
            experience comprehensive and accessible for students of all sections
            of society. We believe in empowering every single student who
            couldn't dream of a good career in engineering and medical field
            earlier.
          </div>
        </div>
        <div className="max-w-[70vw]">
          <div className="text-xl font-semibold mb-2">Our Key Focus Areas</div>
          <div>
            Physics Wallah’s main focus is to create accessible learning
            experiences for students all over India. With courses like Lakshya,
            Udaan, Arjuna & many others, we have been able to provide a ready
            solution for lakhs of aspirants. From providing Chemistry, Maths,
            Physics formulae to giving e-books of eminent authors, PW aims to
            provide reliable solutions for student prep.
          </div>
        </div>
        <div className="max-w-[70vw]">
          <div className="text-xl font-semibold mb-2">What Makes Us Different</div>
          <div>
            Physics Wallah strives to develop a comprehensive pedagogical
            structure for students, where they get a state-of-the-art learning
            experience with study material and resources. Apart from catering
            students preparing for JEE Mains and NEET, PW also provides study
            material for each state board like Uttar Pradesh, Bihar, and others.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
