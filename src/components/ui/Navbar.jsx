import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check for login
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(true);
  }, []);

  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");
  // console.log("Token before sending request:", token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/user/purchases",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // console.log("Request Headers:", response.headers);
        const data = await response.json();
        // console.log("User data:", data);

        if (response.ok) {
          setUserData(data);
        } else {
          console.error("Error:", data.message);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="flex flex-row justify-center h-18 w-full lg:px-20 gap-20 py-4">
      <div className="text-2xl font-bold items-center">
        <img
          src="/public/assets/favicon.ico"
          alt="logo"
          className="h-10 w-10 text-white"
        />
      </div>
      <ul className="flex font-semibold items-center flex-row gap-8">
        <li>
          <Link>Vidyapeeth</Link>
        </li>
        <li>
          <Link>Upskilling-Job Assistance</Link>
        </li>
        <li>
          <Link>PW Store(Books)</Link>
        </li>
        <li>
          <Link>REAL Test</Link>
        </li>
      </ul>
      <div className="bg-purple-800 flex justify-center items-center cursor-pointer font-semibold h-10  px-4 rounded-lg">
        {userData ? (
          <div>
            {isLoggedIn ? (
              <Link to="/" onClick={handleLogout}>
                {userData.firstName}
              </Link>
            ) : (
              <Link to="/auth/signup">Login/Register</Link>
            )}
          </div>
        ) : (
          <Link to="/auth/signup">Login/Register</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
