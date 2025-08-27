import React from "react";
import { motion } from "framer-motion";

const CertificateCard = ({ image, title, skills, link }) => {
  return (
    <motion.div
      className="shadow-md rounded-lg hover:shadow-xl w-auto transition-shadow duration-300 bg-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={() => (window.open(link, "_blank"))}
    >
      <img
        src={image}
        alt={title}
        className=" h-auto mx-auto mt-4"
      />
      <div className="px-2 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="p-2 text-center">
        <h2 className="text-sm text-gray-600">Skills: {skills}</h2>
      </div>
      
    </motion.div>
  );
};

export default CertificateCard;
