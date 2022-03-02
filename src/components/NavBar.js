import React from "react";
import { Link } from "react-router-dom";
import { NavBarData } from "../components/NavBarData";

const NavBar = () => {
  return (
    <nav className="container-nav">
      <ul>
        {NavBarData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} style={item.style}>
                <span>{item.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
