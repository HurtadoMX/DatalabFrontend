import React,{useState} from "react";
import "./header.css";
import datalab from "../../assets/svg/DataLab_color.svg";
import "animate.css";
import { Link } from "react-scroll";
import styled from "styled-components";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import icon from "../../assets/svg/DataLab_color.svg"

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (







    <Container>
    <Wrapper>
      <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
        <LogoContainer>
          <IMG src={icon} alt="" />
        </LogoContainer>

        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <Menu open={showMobileMenu}>
          <MenuItem>
        <Link
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
                
              Inicio
              </div>
            </MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem>
           <Link
           onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="metodologia"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              Metodologia
              </div>
            </MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem>
                <Link
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="servicios"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              Servicios
              </div>
            </MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem>
                <Link
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="clientes"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              Clientes
              </div>
            </MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem>
                <Link
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="data"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              Data Management
              </div>
            </MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem>
                <Link
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="science"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              Data Science
              </div>
            </MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem>
                <Link
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="visual"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              Data Visualization
              </div>
            </MenuItemLink>
            </Link>
          </MenuItem>
          <MenuItem>
                <Link
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="contactos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <div>
              Contacto
              </div>
            </MenuItemLink>
            </Link>
          </MenuItem>
        </Menu>
      </IconContext.Provider>
    </Wrapper>
  </Container>
















    // <nav className="navbar">
    //   <img
    //     className="navbar-logo animate__animated animate__backInLeft"
    //     src={datalab}
    //     alt=""
    //   />
    //   <ul className="nav-links">
    //     <input type="checkbox" id="checkbox_toggle" />
    //     <label htmlFor="checkbox_toggle" className="hamburger">
    //       &#9776;
    //     </label>

    //     <div className="menu">
    //       <li className="header-li">
    //         <Link
    //           to="inicio"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Inicio
    //         </Link>
    //       </li>
    //       <li className="header-li">
    //         <Link
    //           to="metodologia"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Metodologia
    //         </Link>
    //       </li>
    //       <li className="header-li">
    //         <Link
    //           to="servicios"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Servicios
    //         </Link>
    //       </li>
    //       <li className="header-li">
    //         <Link
    //           to="clientes"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Clientes
    //         </Link>
    //       </li>
    //       <li className="header-li">
    //         <Link
    //           to="data"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Data Management
    //         </Link>
    //       </li>

    //       <li className="header-li">
    //         <Link
    //           to="science"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Data Science
    //         </Link>
    //       </li>

    //       <li className="header-li">
    //         <Link
    //           to="visual"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Data Visualization
    //         </Link>
    //       </li>

    //       <li className="header-li">
    //         <Link
    //           to="contactos"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           duration={500}
    //         >
    //           Contacto
    //         </Link>
    //       </li>
    //     </div>
    //   </ul>
    // </nav>
  );
};

export const IMG = styled.img`

margin-left: 40%;
  width: 200px;
  height: 50px;
`

export const Container = styled.div`
font-family: Avenir Next Bold;
box-shadow: 0px 1px 10px black;
margin-top: -80px;
  width: 100%;
  height: 100px;
  background-color: #f6f6f6; 
  position:fixed;
  z-index: 1000;
`;

export const Wrapper = styled.div`
font-family: Avenir Next Bold;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
font-family: Avenir Next Bold;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  p {
    &:nth-child(2) {
      color: #fff;
    }
    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: #e07924;
    }
  }
  svg {
    fill: #e07924;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
font-family: Avenir Next Bold;
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 1170px) {
    background-color: #f4511e;
    position: absolute;
    top: 100px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
font-family: Avenir Next Bold;
  height: 100%;
  @media screen and (max-width: 1170px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
font-family: Avenir Next Bold;
  margin-right: 0%;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: .1rem .6rem;
  color: #000;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    color: #fff;
    background-color: #f4511e;
    transition: 0.5s all ease;
    div {
      svg {
        fill: #23394d;
      }
    }
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 1170px) {
    margin-left: -80%;
    width: 250%;
    font-size: 30px;
    color: #000;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: center;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: center;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
font-family: Avenir Next Bold;
  display: none;
  @media screen and (max-width: 1170px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #e07924;
      margin-right: 0.5rem;
    }
  }
`;

export default Header;
