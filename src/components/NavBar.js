import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <div className="flex justify-between p-4 items-center">
      {/* Logo */}
      <div className="font-cabin font-extrabold text-4xl text-black pl-4 transition-transform duration-300 hover:scale-110 relative group">
        <Link to="/">AK</Link>
      </div>
      {/* Navigation Links */}
      <div className="flex font-bold text-lg  space-x-3 md:space-x-8 pr-2 md:pr-6">
        <Link
          to="/"
          className="text-black font-cabin relative group hover:text-green-800 transition duration-300"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-900 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          to="/projects"
          className="text-black font-cabin relative group hover:text-green-800 transition duration-300"
        >
          Projects
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-900 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          to="/certifications"
          className="text-black font-cabin relative group hover:text-green-800 transition duration-300"
        >
          Certifications
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-900 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
