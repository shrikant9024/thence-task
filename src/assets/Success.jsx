import React, { useEffect, useState } from "react";
import success from "../assets/success.png";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 5000);

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [navigate]);

  return (
    <div className="flex mt-40 justify-center w-screen h-full relative md:mt-24">
      <div className="h-1/2 w-1/2 p-6 rounded-lg flex flex-col items-center md:w-screen">
        <img src={success} alt="succes" className="w-20 h-20" />
        <h2 className="text-green-600 mt-10 text-2xl">Success submitted</h2>
        <h1 className="mt-2 text-[70px]">Congratulations</h1>
        <p className="mt-2 text-center text-neutral-500 text-3xl tracking-wide">
          Your request has been successfully submitted to us. We <br />
          will validate your information and reach out to you <br />
          shortly with updates.
        </p>
      </div>
      <p className=" text-xl text-neutral-500 absolute  -bottom-[200px] md:-bottom-[100px]">
        Redirecting you to Homepage in {""}
        <span className="text-black">{countdown} seconds</span>
      </p>
    </div>
  );
};

export default Success;
