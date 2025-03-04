import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import UserNavbar from "../ui/UserNavbar";

export default  function User() {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");
  // console.log("Token before sending request:", token);

  useEffect(() => {
    const fetchData = async () => {
      
        try {
          const response = await fetch("http://localhost:3000/api/user/purchases", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
      
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

    }
    fetchData();
  }, []);


  return (
    <>
      {/* <Navbar /> */}
      <UserNavbar/>
      <div className="my-10 px-10 text-4xl font-bold flex justify-center">
      {userData ? (
        <div>
          <p>{userData.message}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
