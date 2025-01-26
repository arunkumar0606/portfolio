import { Link } from "react-router-dom";
import "../css/navbar.css"

function NavBar() {
    return (
        <div class="flex justify-between items-center p-4">

            <div className="font-serif font-bold text-4xl text-green-500 text-70rem text-left pl-9 p-1 hover:text-white transition-all duration-300">
                <p>AK</p>
            </div>
            <div className="flex space-x-1 text-right">

                <div className="text-white px-4 py-2 rounded-lg shadow-md border-2 border-transparent hover:border-white transition-all duration-300">
                    <Link to="/">Home </Link>
                </div>
                <div className="text-white px-4 py-2 rounded-lg shadow-md border-2 border-transparent hover:border-white transition-all duration-300">
                    <Link to="/projects">Projects </Link>
                </div>

            </div>
        </div>



    )
}

export default NavBar