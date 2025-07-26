
export function Certifications() {
  return (
    <>
      
  <div className="overflow-hidden w-full  bg-black  py-4">
    <p className="text-white text-3xl font-bold text-center mb-5">Certifications</p>
  <div className="flex animate-marquee-fast md:animate-marquee-medium space-x-80">
    <img src="aws_certified.png" alt="aws" className="md:max-h-[300px] hover:scale-110 transition-transform duration-300" />
    <img src="redhat_certified.png" alt="redhat" className="md:max-h-[300px]  hover:scale-110 transition-transform duration-300 " />
    <img src="Java_Performance_certificate.png" alt="redhat" className="md:max-h-[300px]  hover:scale-110 transition-transform duration-300 " />
  </div>
  </div>
    </>
  );
}