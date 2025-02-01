import "../css/aboutMe.css";
import React from "react";
import { aboutMe } from "../data/data";

function Aboutme() {

  return (
    <>
      <p>
        <title>Arun Kumar | About</title>
        <meta name="description" content="any description" />
      </p>


      <div class="pb-[100px] bg-gray-100  ">
        <div class="text-black p-4 md:text-6xl sm:text-6xl text-4xl text-center font-bold font-cabin hover:underline transition:300">
          <p >
            More About me
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-2 md:px-2">

          <div className=" md:w-[330px] ">
            <img src={'/Arun.jpeg'}
              alt="Example"
              className="w-full md:h-[320px]  border-8 hover:scale-105 border-black rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 "
            />
          </div>

          <div className="w-full md:w-[820px] md:pl-10   md:p-20 p-2 align-left">
            <p className="text-black font-cabin font-bold md:text-2xl text-center md:text-left">
              {aboutMe}
            </p>

          </div>

        </div>

      </div>

    </>
  )


}

export default Aboutme;