import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <h1>Jonathan Baldyga</h1>
      <nav>
        <NavLink to="/" end activeClassName="active">
          About Me
        </NavLink>
        <NavLink to="/portfolio" activeClassName="active">
          Portfolio
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
