import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center gap-10">
      <div>
        <div>
          <img src="" alt="logo" />
          <div>Physics Wallah</div>
        </div>
        <div className="text-sm w-[30rem]">We understand that every student has unique needs and abilities, that's why our curriculum is designed to adapt to your needs and help you grow!</div>
        <div>
          <img src="" alt="playstore" />
          <img src="" alt="appstore" />
        </div>
        <div>
          <div>Let's get social :</div>
          <div>
            <ul>
              <li>FB</li>
              <li>IG</li>
              <li>YT</li>
              <li>LN</li>
              <li>X</li>
              <li>TG</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 items-center pb-20">
        <div>
          <div className="text-2xl mb-2 font-bold">Company</div>
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
          <div className="text-2xl mb-2 font-bold">Our Centres</div>
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
          <div className="text-2xl mb-2 font-bold">Popular Exams</div>
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
          <div className="text-2xl mb-2 font-bold">Connect With Us</div>
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
          <div className="text-2xl mb-2 font-bold">Quick Links</div>
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
          <div className="text-2xl mb-2 font-bold">Our Products</div>
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
  );
};

export default Footer;
