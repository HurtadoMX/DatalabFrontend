import React from "react";
import "./header.css";
import datalab from "../../assets/svg/DataLab_color.svg";
import "animate.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="navbar">
      <img
        className="navbar-logo animate__animated animate__backInLeft"
        src={datalab}
        alt=""
      />
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>

        <div className="menu">
          <li className="header-li">
            <Link
              to="inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Inicio
            </Link>
          </li>
          <li className="header-li">
            <Link
              to="metodologia"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Metodologia
            </Link>
          </li>
          <li className="header-li">
            <Link
              to="servicios"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Servicios
            </Link>
          </li>
          <li className="header-li">
            <Link
              to="clientes"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Clientes
            </Link>
          </li>
          <li className="header-li">
            <Link
              to="data"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Data Management
            </Link>
          </li>

          <li className="header-li">
            <Link
              to="science"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Data Science
            </Link>
          </li>

          <li className="header-li">
            <Link
              to="visual"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Data Visualization
            </Link>
          </li>

          <li className="header-li">
            <Link
              to="contactos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contacto
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
