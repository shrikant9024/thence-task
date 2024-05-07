import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("ⓘ Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const isSubmitDisabled = !name || !email;

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail();
    if (!emailError) {
      console.log("email is invalid");
    } else {
      navigate("/success");
    }
  };
  const redirectToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex mt-40 justify-center w-screen h-screen relative md:mt-10  ">
      <button
        className="absolute right-16 w-14 h-14 border text-xl border-slate-300 rounded-full  -top-[105px] text-black  focus:outline-none md:top[700px] "
        onClick={redirectToHomePage}
      >
        x
      </button>

      <form
        onSubmit={handleSubmit}
        className="h-1/2 w-1/4 p-6 rounded-lg flex flex-col justify-between items-center md:w-1/2 md:h-1/4"
      >
        <h3 className=" text-green-600 font-cbyg text-3xl">
          Registration Form
        </h3>
        <div className="text-center mb-1">
          <h1 className="text-[50px] text-black mb-2">Start your success</h1>
          <h1 className="text-[50px] text-black">Journey here!</h1>
        </div>
        <input
          type="text"
          placeholder="Enter your name here"
          className="px-6 py-4 w-3/4 rounded-full mb-2 mt-10 bg-neutral-200 border focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="px-6 py-4 w-3/4 rounded-full mb-10 mt-4 bg-neutral-200 border  focus:outline-none "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && (
          <p className="text-red-700 text-sm -mt-6 mb-8">{emailError}</p>
        )}
        <button
          className={`px-6 py-4 w-3/4 rounded-full mb-2 bg-neutral-400 text-white focus:outline-none ${
            isSubmitDisabled && "opacity-50 cursor-not-allowed"
          }`}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
