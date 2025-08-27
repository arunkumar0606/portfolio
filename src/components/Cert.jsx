import React from "react";
import { certifications as CERTIFICATIONS } from "../data/data.js";
import CertificateCard from "./CertificateCard";

const Cert = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Certifications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:m-[50px] m-5">
        {CERTIFICATIONS.map((cert, index) => (
          <CertificateCard key={index} image={cert.image} title={cert.title} skills={cert.skills} link={cert.link} />
        ))}
      </div>
    </div>
  );
};

export default Cert;
