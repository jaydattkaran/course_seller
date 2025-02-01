import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
  <>
    <label className="text-xl font-bold">{label}</label>
    <input {...register(label, { required })} 
    className="border-1 h-10 w-[20rem] rounded-md"/>
  </>
);



const Usersigninn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="flex justify-center my-20">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col gap-4">
          <Input label="Enter email" register={register} required />
          <Input label="Enter password" register={register} required />
          <input type="submit" className="border-none py-2 rounded-lg bg-violet-700 text-xl font-bold"/>
        </form>

        <div className="flex flex-row gap-4 my-4">
          <div>Create new account ? <Link className="text-violet-400 font-bold">Sign Up</Link></div>
        </div>
      </div>


    </div>

  );
}

export default Usersigninn