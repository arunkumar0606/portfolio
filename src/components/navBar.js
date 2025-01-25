import { Link } from "react-router-dom";
import "../css/navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-home">
            <Link to="/" className="nav-link">Home </Link>
        </div>
        <div className="navbar-projects">
            <Link to="/projects" className="nav-link">Projects</Link>
        </div>
    </nav>
}

export default NavBar