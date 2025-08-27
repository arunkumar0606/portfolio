import "../css/aboutMe.css";
import React, { useEffect } from "react";
import { skills } from "../data/data";
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

            <div className="max-w-screen-2xl mx-auto px-4 overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 mb-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="p-4 flex flex-col items-center overflow-hidden"
                            data-aos="fade-left"
                            data-aos-delay={index * 70}
                        >
                            <div className="w-20  h-20 flex items-center justify-center overflow-hidden">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="max-w-full max-h-full object-contain transition-transform duration-200 hover:scale-105"
                                />
                            </div>
                            <p className="text-lg font-bold font-cabin mt-2 text-center">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <hr />
        </>
    );
}

export default Skills;
