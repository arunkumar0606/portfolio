import React from "react";
import { ReactTyped } from "react-typed";
import { MAIN_BODY_STRING_3, TYPING_STRING ,colors} from "../data/data";
import { useState } from "react";

function MainBody() {
  const [color,setColor]=useState("green");
  const handleColorChange = () => {
    var random = Math.floor(Math.random() * colors.length);
    setColor(colors[random]);
  };
  
  return (

  <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-between h-[80vh] md:h-[99vh] md:mt-[-96px] px-4">
    {/* LEFT SIDE (Text Content) */}
    <div className='flex-1 flex flex-col '>
      <p className='text-black font-bold p-2 text-center mt-4 md:mt-0'>
        Hi, I'M A SOFTWARE ENGINEER 
      </p>
      <h1 className={`md:text-4xl sm:text-4xl text-2xl md:ml-16 text-center md:text-justify font-bold md:py-6 text-${color}-700 transition-none`}>
        Expertised @
        <ReactTyped
          className="ml-2 md:ml-3 "
          strings={TYPING_STRING}
          typeSpeed={40}
          backSpeed={30}
          loop 
        />
      </h1>
      <p className='md:text-5xl sm:text-4xl text-2xl font-bold py-4 text-center '>
        {MAIN_BODY_STRING_3}
      </p>
      <div className="text-center">
      <button className={`bg-${color}-700 w-[200px] rounded-md font-medium my-6 py-3 text-white text-center transform hover:scale-105 transition-transform duration-300 `}>
        <a href="https://www.linkedin.com/in/arunkumard0606/" target="_blank">
          Connect with me!
        </a>
      </button>
      </div>
    </div>
    <div className='flex-1 flex justify-center'>
      <img src ="Arun_new.png" onClick={()=>handleColorChange()} alt="Arun Image" className={`max-h-[350px] object-contain rounded-full  hover:shadow-${color}-800 shadow-xl transition-transform duration-100 hover:scale-105`} />
    </div>

  </div>


  );
}

export default MainBody;