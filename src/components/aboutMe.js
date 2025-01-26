import "../css/aboutMe.css";
import React from "react";



function Aboutme() {

  return (
    <>
      <p>
        <title>Arun Kumar | About</title>
        <meta name="description" content="any description" />
      </p>

      <div class="mx-auto max-w-30 pt-5 overflow-hidden rounded-xl shadow-md md:max-w-5xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-full w-full object-cover md:h-72 md:w-80 mt-14 p-1 border-2 border-white rounded-lg"
              src={'/Arun.jpeg'}
              alt="profile pic"
            />
          </div>
          <div class="p-12">
            <a href="#" class="mt-1 text-2xl font-cabin font-bold uppercasetext-lg flex items-center justify-center leading-tight text-green-500 ">
              ABOUT ME
            </a>
            <p class="mt-2   text-white text-center font-cabin font-bold uppercase opacity-80 hover:opacity-100 transition-opacity duration-700">
              Software Engineer with over 2.5+ years of experience. Started my career as a Java backend developer and have gained proficiency in multiple technologies and development environments. Throughout my career, I have worked with various clients, solving complex technical problems, and consistently delivering high-quality, scalable code. I have developed a strong understanding of software development life cycle (SDLC), from design to deployment, while ensuring optimal performance and user experience.
              I believe that technical skills are just a tool, and the true key to success lies in the ability to identify the root cause of any problems.
            </p>
          </div>dc
        </div>
      </div>



    </>
  )


}

export default Aboutme;