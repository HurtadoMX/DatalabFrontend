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
import icon from "../../assets/svg/DataLab_calado.svg"

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (







    <Container>
    <Wrapper>
      <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
      <LogoContainer>
          {/* <IMG src={icon} alt="" /> */}
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

        <MenuItemLink>
        <div>
          
          <IMG src={icon} alt="" />
        </div>
        </MenuItemLink>
            </Link>
        </MenuItem>
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

margin-left: 0%;
  width: 200px;
  height: 50px;
`

export const Container = styled.div`
font-family: Avenir Next Medium;
box-shadow: 0px 1px 10px black;
margin-top: -80px;
  width: 100%;
  height: 100px;
  background-color: #f6f6f6;
  position:fixed;
  z-index: 1000;
`;

export const Wrapper = styled.div`
font-family: Avenir Next Medium;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
font-family: Avenir Next Medium;
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
      color: #E8E8E8;
    }
  }
  svg {
    fill: #E8E8E8;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
font-family: Avenir Next Medium;
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 2560px) {
    font-family: Avenir Next Medium;

    background-color: #040415;
    position: absolute;
    top: 0px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    
    /* box-shadow: rgba(100,100,111, 0.2) 0px 0px 9px 1280px; */

    width: 30%;
    height: 100vh;
    text-align: center;

    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
   
  }
  @media screen and (max-width: 880px) {
    font-family: Avenir Next Medium;
    background-color: #040415;
    position: absolute;
    top: 0px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 70%;
    height: 100vh;
    text-align: center;

    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
  @media screen and (max-width: 500px) {
    font-family: Avenir Next Medium;
    background-color: #040415;
    position: absolute;
    top: 0px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 75%;
    height: 100vh;
    text-align: center;
    /* box-shadow: rgba(100,100,111, 0.2) 0px 0px 9px 105px; */
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
  @media screen and (max-width: 260px) {
    font-family: Avenir Next Medium;
    background-color: #040415;
    position: absolute;
    top: 0px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 75%;
    height: 100vh;
    text-align: center;

    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
text-align: left;
font-family: Avenir Next Medium;
  height: 100%;
  @media screen and (max-width: 2560px) {
    font-family: Avenir Next Bold;
    height: 100%;
    /* max-width: 500%; */
    margin-top: 5%;
    width: 100%;
    margin-left: 20%;
    height: 7%;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  @media screen and (max-width: 880px) {
    font-family: Avenir Next Medium;
    height: 100%;
    /* max-width: 500%; */
    margin-top: 5%;
    width: 100%;
    margin-left: 20%;
    height: 7%;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  @media screen and (max-width: 500px) {
    font-family: Avenir Next Medium;
    height: 100%;
    /* max-width: 500%; */
    margin-top: 5%;
    width: 100%;
    margin-left: 20%;
    height: 7%;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  @media screen and (max-width: 260px) {
    font-family: Avenir Next Medium;
    height: 100%;
    /* max-width: 500%; */
    margin-top: 5%;
    width: 100%;
    margin-left: 20%;
    height: 7%;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
`;

export const MenuItemLink = styled.a`
font-family: Avenir Next Medium;
  margin-right: 0%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  padding: .1rem .6rem;
  color: #fff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    padding: 10px;
    color: #f4511e;
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
      fill: #E8E8E8;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 2560px) {
    font-family: Avenir Next Medium;
    text-align: left;
    margin-left: 0px;
    width: 70%;
    font-size: 150%;
    color: #fff;
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    font-family: Avenir Next Medium;
    text-align: left;
    margin-left: 0px;
    width: 70%;
    font-size: 200%;
    color: #fff;
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    font-family: Avenir Next Medium;
    text-align: left;
    margin-left: 0px;
    width: 70%;
    font-size: 150%;
    color: #fff;
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
   
    font-family: Avenir Next Medium;
     text-align: left;
    margin-left: 0px;
    width: 70%;
    font-size: 140%;
    color: #fff;
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
font-family: Avenir Next Medium;
  display: none;
  @media screen and (max-width: 2560px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #707070;
      margin-right: 0.5rem;
    }
  }
`;

export default Header;
