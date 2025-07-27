// WorkEducationTimeline.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { timelineItems } from "../data/data.js";


export default function TimeLine() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div className="bg-[#0f172a] min-h-screen py-12 px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
      Work Experience & Education
    </h2>
  
    <div className="max-w-3xl mx-auto relative border-l-4 border-white pl-6">
      {timelineItems.map((item, index) => (
        <div
          key={index}
          className="mb-12"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="bg-slate-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {item.subtitle} -{" "}
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-gray-400 mb-2">
              {item.company} • {item.date}
            </p>
            <ul className="list-disc list-inside text-gray-300 md:text-base space-y-1">
  {item.description.map((point, idx) => (
    <li key={idx}>{point}</li>
  ))}
</ul>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  

  );
}
