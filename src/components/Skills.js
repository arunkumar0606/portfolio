import "../css/aboutMe.css";
import React from "react";
import { aboutMe, skills } from "../data/data";

function Skills() {

    return (
        <>


            <div class="pb-[230px] p-4 bg-white text-center">
                <p class="text-black font-cabin text-4xl font-bold">
                    Skills
                </p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
                        >
                            <img src={skill.image} alt={skill.name} className="w-15 h-16 mb-2 hover:scale-105" />
                            <p className="text-lg font-bold font-cabin">{skill.name}</p>
                        </div>
                    ))}
                </div>

            </div>

        </>
    )



}

export default Skills;