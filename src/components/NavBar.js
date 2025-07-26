import { Link } from "react-router-dom";
import "../css/navbar.css"

function NavBar() {
    return (
        <div class="flex justify-between p-1 bg-white">

            <div className="font-cabin font-bold text-3xl  text-black text-70rem text-left pl-4 p-1 hover:text-green-800 transition-all duration-300">
                <p>AK</p>
            </div>
            <div className="flex text-right font-medium md:justify-end md:mr-[50px]">

                <div className="text-black font-cabin md:px-4 px-2 py-2  hover:text-green-800 duration-300">
                    <Link to="/">Home </Link>
                </div>
                <div className="text-black font-cabin px-4 py-2  hover:text-green-800  duration-300">
                    <Link to="/projects">Projects </Link>
                </div>
               
            </div>
            
        </div>

    )
}

export default NavBar