import "../css/aboutMe.css";
import React from "react";
import { aboutMe, skills } from "../data/data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
    useEffect(() => {
        AOS.init({ duration: 900 });
    }, []);

    return (
        <>
            <h2 className="pt-6 text-3xl md:text-4xl font-bold text-black text-center mb-12">
                Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 mb-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="p-4 flex flex-col items-center"
                        data-aos="fade-left"
                        data-aos-delay={index * 70}
                    >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-20 h-20 object-contain mb-1 hover:scale-105 transition-transform duration-200"
                        />
                        <p className="text-lg font-bold font-cabin mt-1 text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
            <hr></hr>


        </>
    )



}

export default Skills;