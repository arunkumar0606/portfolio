import React from "react";
import { ReactTyped } from "react-typed";
import { introString1, typeString } from "../data/data";

function Intro() {
    return (
        <div className=' bg-white'>
            
          <div className='max-w-[890px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-black font-bold p-2'>
              I'M A SOFTWARE ENGINEER
            </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-green-700'>
              I deliver 
              <ReactTyped className="ml-2 md:ml-3"
                strings={typeString}
                typeSpeed={40}    
                backSpeed={30}
                loop
              />  
            </h1>
            <div>
              <p className='md:text-5xl sm:text-4xl text-2xl font-bold py-4'>
                {introString1}
              </p> 
            </div>
            <button className='bg-green-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'><a href="https://www.linkedin.com/in/arunkumard0606/" target="_blank">Connect with me </a></button>
        
          </div>
          
        </div>
        
      );
}

export default Intro;