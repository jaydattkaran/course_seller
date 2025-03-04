import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// Reusable Input Component
const Input = ({ label, register, required, type = "text" }) => (
  <>
    <label className="text-xl font-bold">{label}</label>
    <input
      {...register(label, { required })}
      type={type}
      className="border-1 h-10 w-[20rem] rounded-md px-2"
    />
  </>
);

const Usersigninn = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Login = async (formData) => {
    setLoading(true);

    // console.log("Data for API:", formData);

    try {
      const response = await fetch("http://localhost:3000/api/user/signin", {
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
      // console.log("You are signed in:", data);

      localStorage.setItem("token", data.token);
      navigate("/courses");
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center my-20">
      <div>
        <form onSubmit={handleSubmit(Login)} className="flex flex-col gap-4">
          <Input
            label="email"
            register={register}
            required
            type="email"
          />
          <Input
            label="password"
            register={register}
            required
            type="password"
          />
          <button
            type="submit"
            disabled={loading}
            className="border-none py-2 rounded-lg bg-violet-700 text-xl font-bold"
          >
            {loading ? "..." : "Sign In"}
          </button>
        </form>

        <div className="flex flex-row gap-4 my-4">
          <div>
            Create new account?{" "}
            <Link to="/auth/signup" className="text-violet-400 font-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usersigninn;
