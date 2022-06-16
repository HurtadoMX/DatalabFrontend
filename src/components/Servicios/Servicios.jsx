import React from "react";
import "./servicios.css";
// import textura from "../../assets/png/Textura2.png";
import Data_Management from "../../assets/svg/Data Management.svg";
import Data_SCIENCE from "../../assets/svg/Data SCIENCE.svg";
import Data_Visualization from "../../assets/svg/Data Visualization.svg";
import { BsArrowRight } from "react-icons/bs";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

<li className="header-li">
  <Link to="inicio" spy={true} smooth={true} offset={-70} duration={500}>
    Inicio
  </Link>
</li>;

const Servicios = () => {
  return (
    <div className="servicios" id="servicios">
      <div className="servicios-titulo">
        <hr className="hr_metodologia" />
        <h1>SERVICIOS</h1>
      </div>
      <div className="servicios-group">
      {/* <img className="servicios-image-puntos" src={textura} alt="" /> */}
        <h2>Evaluamos, asesoramos y optimizamos en cada fase</h2>
        <p>
          <span>En cada etapa de nuestra colaboración,</span>{" "}
          <span>nunca dejamos de buscar formas de hacer</span> mas por nuestros
          clientes
        </p>
      </div>
      <div className="servicios-items">
        <div className="servicios-primer-item">
          <img className="servicios-svg1" src={Data_Management} alt="" />
          <h2>DATA MANAGEMENT</h2>
          <p>
            <span>Te ayudamos a integrar,</span> estructurar y limpiar tus datos...
          </p>
          <div className="servicios-item-a">
            <a
              href="/data-management"
              // spy={true}
              // smooth={true}
              // offset={-70}
              // duration={500}
            >
              Leer más <BsArrowRight className="arrow" />
            </a>
          </div>
        </div>

        {/* ESTE EL ITEM PARA MODIFICADO PARA LA VERSION MOVIL */}
        <div className="item1">
          <div className="item-separados1">
            <img src={Data_Management} alt="" />
            <h2>
              <p>DATA</p> MANAGEMENT
            </h2>
          </div>
          <div className="servicios-primer-item1">
            <p>
              <span>Te ayudamos a integrar,</span> estructurar y limpiar tus datos...
            </p>
            <div className="servicios-item-a">
              <a
                href="/data-management"
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
              >
                Leer más <BsArrowRight className="arrow" />
              </a>
            </div>
          </div>
        </div>

        <div className="servicios-segundo-item">
          <img
            className="servicios-svg2 servicios-text-h2"
            src={Data_SCIENCE}
            alt=""
          />
          <h2 className="">
            <p>DATA SCIENCE </p> & ANALYTICS
          </h2>
          <p>
            <span>Trabajamos en equipo contigo,</span> para entender tus objetivos...
          </p>
          <div className="servicios-item-a">
            <a
              href="/data-science"
              // spy={true}
              // smooth={true}
              // offset={-70}
              // duration={500}
            >
              Leer más <BsArrowRight className="arrow" />
            </a>
          </div>
        </div>

        {/* ESTE EL ITEM PARA MODIFICADO PARA LA VERSION MOVIL */}
        <div className="item2">
          <div className="item-separados2">
            <img className="" src={Data_SCIENCE} alt="" />
            <h2 className="">
              <p>DATA SCIENCE </p> & ANALYTICS
            </h2>
          </div>
          <div className="servicios-primer-item2">
            <p>
              <span>Trabajamos en equipo contigo,</span> para entender tus
              objetivos...
            </p>
            <div className="servicios-item-a">
              <a
                href="/data-science"
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
              >
                Leer más <BsArrowRight className="arrow" />
              </a>
            </div>
          </div>
        </div>

        <div className="servicios-tercer-item">
          <img className="servicios-svg3" src={Data_Visualization} alt="" />
          <h2>DATA VISUALIZATION</h2>
          <p>
            <span>Te ayudamos a visualizar tus</span> datos de la mejor forma...
          </p>
          <div className="servicios-item-a">
            <a
              href="/data-visual"
              // spy={true}
              // smooth={true}
              // offset={-70}
              // duration={500}
            >
              Leer más <BsArrowRight className="arrow" />
            </a>
          </div>
        </div>

        {/* ESTE EL ITEM PARA MODIFICADO PARA LA VERSION MOVIL */}
        <div className="item3">
          <div className="item-separados3">
            <img className="" src={Data_Visualization} alt="" />
            <h2>
              <p>DATA</p> VISUALIZATION
            </h2>
          </div>
          <div className="servicios-tercer-item3">
            <p>
              <span>Te ayudamos a visualizar tus</span> datos de la mejor forma...
            </p>
            <div className="servicios-item-a">
              <a
                href="/data-visual"
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={500}
              >
                Leer más <BsArrowRight className="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
