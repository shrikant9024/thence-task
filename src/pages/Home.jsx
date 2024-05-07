import React from "react";
import girl from "../assets/home-girl.png";
import frame from "../assets/Frame.png";
import Accordian from "../layout/Accordian";
import EastIcon from "@mui/icons-material/East";
const Home = () => {
  return (
    <div className="h-full">
      <div className=" -mt-[72px] w-full h-60">
        <h3 className="py-4 mt-20 text-center font-thin text-green-500 text-[30px] font-cbyg  ">
          success story
        </h3>
        <h2 className="text-center font- text-[40px]  tracking-tight">
          Every success journery
          <br />
          we have enocuntered{" "}
        </h2>
      </div>
      <div className="  w-full h-[100vh] -mt-40 flex items-center justify-center">
        <div className="flex relative">
          <div className=" w-[50vh] ml-[30vh] relative ">
            <img
              src={girl}
              alt="girl-image"
              className="rounded-[50px] w-[50vh] hover:shadow-2xl"
            />
          </div>
          <div className="flex bg-white w-60 rounded-full h-20 absolute top-3/4 left-[180px] items-center justify-between px-2 hover:shadow-md">
            <div className="flex items-center ">
              <img src={frame} alt="frame" className="w-8 h-8 ml-8" />
            </div>
            <div className="flex flex-col">
              {" "}
              <h1 className="text-black ml-2 text-2xl font-semibold ">
                10 DAYS
              </h1>
              <h3 className="text-neutral-400 mr-4">Staff Deployment</h3>
            </div>
          </div>

          <div className="w-[250px] h-[200px]  bg-white absolute top-[150px] left-[170px] md:rounded-[30px] drop-shadow-xl hover:shadow-2xl md:top-14 md:left-[80px] 2xl:left-[140px] 2xl:top-20">
            <h1 className="mx-16 my-8 text-[50px] text-center">40%</h1>
            <p className="text-[13px] text-slate-500 mx-14 -mt-8 text-center ">
              Achieved reduction in <br />
              project execution time <br />
              by optimizing team <br />
              availaibility
            </p>
          </div>
          <div className=" w-[250px] h-[200px] bg-green-950 absolute rounded-[30px] drop-shadow-xl hover:shadow-2xl md:top-[280px] md:left-[500px] 2xl:top-[370px] 2xl:left-[600px] ">
            <h1 className="text-white mx-8 my-8 text-[50px] flex">
              $0.5{" "}
              <span className="text-lg my-8 text-gray-600 mx-2 flex">
                MILLION
              </span>
            </h1>
            <p className="text-xs text-gray-300 mx-14 w-full -mt-8 ">
              Reduced client expenses <br />
              by saving on hiring
              <br />
              employee costs.
            </p>
          </div>

          <div className="ml-[20vh] mt-20 relative md:-top-10">
            <h2 className="text-[36px] font-semibold mt-2">
              Enhance fortune 50
              <br />
              company's insights
              <br />
              teams research
              <br /> cababilities
            </h2>
          </div>
          <button className="px-6 py-4 h-[60px] top-[400px] right-[180px] bg-black text-white rounded-full ml-22  absolute hover:bg-neutral-800 md:top-[350px] md:right-16 hover:shadow-md">
            Explore more
            <EastIcon className="ml-3" />
          </button>
        </div>
      </div>
      <div className="w-screen h-[100vh]">
        <div className="mx-10 bg-royal-green py-2 h-[80vh] m-10 rounded-[40px]  relative">
          <div className="h-full w-1/2 right-4 absolute">
            <div className="p-3 bg-royal-green rounded-lg mt-4">
              <Accordian
                title="Do You offer freelances"
                description="Yes, why not!!"
              />
            </div>
            <div className="p-3 bg-royal-green rounded-lg mt-4">
              <Accordian
                title="What`s the guarantee that I will be satisfied with the hired talent?"
                description="We guarantee it and we have proven records."
              />
            </div>
            <div className="p-3 bbg-royal-greenrounded-lg mt-4">
              <Accordian
                title="Can i hire multiple talents at once"
                description="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreemen. Escalate to platform support if needed, considering mediation. Review policies. seek collaborative solutions for resolutions."
              />
            </div>
            <div className="p-3 bg-royal-green rounded-lg mt-4">
              <Accordian
                title="Why should i not go to agency directly?"
                description="You are free to but our approach is what makes different from those agency!"
              />
            </div>
            <div className="p-3 bg-royal-green rounded-lg mt-4">
              <Accordian
                title="Who can help me pick a right skillset and duration for me?"
                description="We have senior mentors to guide you."
              />
            </div>
          </div>

          <div className="absolute top-20 left-[100px]">
            <h3 className="mx-10 text-gray-400 font-thin font-cbyg text-3xl">
              What's on your mind
            </h3>
            <h1 className="mx-12 mt-2 text-[60px]  text-black">
              Ask Questions
            </h1>
          </div>
        </div>
        <div className="mx-10 bg-royal-green py-2 h-[15vh] m-10 rounded-[40px] relative flex items-center justify-between">
          <h1 className="mx-10">© Talup 2023. All rights reserved</h1>
          <div className="flex">
            <div className="mr-4">
              <h3 className="underline text-">Terms &amp; Conditions</h3>
            </div>
            <div>
              <h3 className="mr-10 underline">Privacy Policy</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
