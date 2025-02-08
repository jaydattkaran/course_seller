import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
    
      <div className="flex flex-row justify-center gap-30 pb-20">
        <div>
          <div className="text-2xl mb-2 font-bold">About</div>
          <ul>
            <li>
              <Link>About us</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>News</Link>
            </li>
            <li>
              <Link>MyExam EduBlogs</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-2xl mb-2 font-bold">Help & Support</div>
          <ul>
            <li>
              <Link>Refund policy</Link>
            </li>
            <li>
              <Link>Transfer policy</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-2xl mb-2 font-bold">Popular Goals</div>
          <ul>
            <li>
              <Link>WEB2</Link>
            </li>
            <li>
              <Link>WEB3</Link>
            </li>
            <li>
              <Link>DSA</Link>
            </li>
            
          </ul>
        </div>
        <div>
          <div className="text-2xl mb-2 font-bold">Courses</div>
          <ul>
            <li>
              <Link>Online Courses</Link>
            </li>
            <li>
              <Link>Distance Learning</Link>
            </li>
            <li>
              <Link>Online Test Series</Link>
            </li>
            <li>
              <Link>Practice Projects</Link>
            </li>
          </ul>
        </div>
        
        
      </div>
    </div>
  );
};

export default Footer;
