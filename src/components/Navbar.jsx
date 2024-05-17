import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link">
            Обо мне
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/resume" className="navbar-link">
            Резюме
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/portfolio" className="navbar-link">
            Портфолио
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/blogs" className="navbar-link">
            Блог
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link">
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
