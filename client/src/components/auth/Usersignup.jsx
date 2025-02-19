import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// Fixed Input Component
const Input = ({ label, name, type = "text", register, required }) => (
  <>
    <label className="text-xl font-bold" htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      {...register(name, { required })}
      className="border-1 h-10 w-[20rem] rounded-md px-2"
    />
  </>
);

const Usersignup = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Signup = async (formData) => {
    setLoading(true);

    // console.log("Data for API:", formData);

    try {
      const response = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      console.log("You are signed up successfully!");

      navigate("/auth/signin");
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center my-20">
      <div>
        <form onSubmit={handleSubmit(Signup)} className="flex flex-col gap-4">
          <Input label="First Name" name="firstName" register={register} required />
          <Input label="Last Name" name="lastName" register={register} required />
          <Input label="Email" name="email" type="email" register={register} required />
          <Input label="Password" name="password" type="password" register={register} required />
          
          <button
            type="submit"
            disabled={loading}
            className="border-none py-2 rounded-lg bg-violet-700 text-xl font-bold"
          >
            {loading ? "..." : "Sign Up"}
          </button>
        </form>

        <div className="flex flex-row gap-4 my-4">
          <div>
            Already have an account?{" "}
            <Link to="/auth/signin" className="text-violet-400 font-bold">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usersignup;
