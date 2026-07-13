import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/images/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="NTIT Technologies" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/courses">Explore Courses</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className="navbar-button">
        <Link to="/login" className="login-btn">
          Student Login
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;