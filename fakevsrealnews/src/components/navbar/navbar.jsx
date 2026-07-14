import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>Fake News  DETECTOR</h2>
      </div>

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/detect">Detect</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;