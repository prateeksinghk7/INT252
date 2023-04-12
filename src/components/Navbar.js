import {Component} from "react";
// import "./NavbarStyles.css";
import{Link} from "react-router-dom";
class Navbar extends Component{
render() {
    return(
        <nav className="NavbarItems">

            <h1 className="navbar-logo">Trip</h1>
            <ul className="nav-menu"><li>
                <li>
                    <a href="/">
                    <i className="fa-solid fa-house-user"></i>Home
                    
                    </a>
                </li>
                </li>
                </ul>
        </nav>
    )
}
}

export default Navbar;