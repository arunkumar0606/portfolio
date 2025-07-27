import { Link } from "react-router-dom";
import "../css/navbar.css"
import { GITHUB_URL } from "../data/data";

function NavBar() {

    return (
        <div className="flex justify-between p-4 items-center">

            {/* Logo */}
            <div className="font-cabin font-extrabold text-4xl text-black pl-4 transition-transform duration-300 hover:scale-110 relative group">
                AK
            </div>
            {/* Navigation Links */}
            <div className="flex font-bold text-lg space-x-8 pr-6">

                <Link
                    to="/upComing"
                    className="text-black font-cabin relative group hover:text-green-800 transition duration-300"
                >
                    Projects
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <a href="/upComing"

                    className="text-black font-cabin relative group hover:text-green-800 transition duration-300"
                >
                    Certifications
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-900 transition-all duration-300 group-hover:w-full"></span>

                </a>
            </div>
        </div>

    );

};

export default NavBar