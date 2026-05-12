import { NavLink } from "react-router-dom";

import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      {/* Logo */}
      <div className={Styles.logo}>
        <h1>Task Manager App</h1>
      </div>

      {/* Nav Links */}
      <ul className={Styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? Styles.active : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? Styles.active : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
