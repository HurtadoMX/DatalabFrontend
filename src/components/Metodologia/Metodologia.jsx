import React from "react";
import "./metodologia.css";
import textura from "../../assets/svg/Textura.svg";

const Metodologia = () => {
  return (
    <div className="metodologia" id="metodologia">
      <div className="metodologia-wrapper">
        <div className="metodologia-titulo">
          <hr className="hr_metodologia" />
          <h1>METODOLOGÍA</h1>
        </div>
        <img className="metodologia-textura" src={textura} alt="" />
        <div className="metodologia-group">
          <div>
            <h2 className="text-left">
              En cada etapa de nuestra colaboración, nunca dejamos de buscar
              formas de hacer mas por nuestros clientes
            </h2>
          </div>
          <div>
            <div className="metodologia-puntos primer-punto">
              <div>
                <h1 className="metodologia_number">1</h1>
              </div>
              <div className="text1">
                <p className="metodologia_text">
                  Definición de las preguntas de negocio correctas para que se
                  puedan tratar de forma analítica y respondan a los objetivos
                  de la empresa.
                </p>
              </div>
            </div>
            <div className="metodologia-puntos primer-punto">
              <div>
                <h1 className="metodologia_number">2</h1>
              </div>
              <div className="text2">
                <p className="metodologia_text">
                  Recopilación y extracción de datos.
                </p>
              </div>
            </div>
            <div className="metodologia-puntos primer-punto">
              <div>
                <h1 className="metodologia_number">3</h1>
              </div>
              <div className="text3">
                <p className="metodologia_text">
                  Limpieza y reestructuración de los datos para que sean aptos
                  para ser analizados.
                </p>
              </div>
            </div>
            <div className="metodologia-puntos primer-punto">
              <div>
                <h1 className="metodologia_number">4</h1>
              </div>
              <div className="text4">
                <p className="metodologia_text">
                  Análisis de los datos: procesos, análisis exploratotio,
                  creación y optimización de modelos, análisis predictivos,
                  machine learning y estadística.
                </p>
              </div>
            </div>
            <div className="metodologia-puntos primer-punto">
              <div>
                <h1 className="metodologia_number">5</h1>
              </div>
              <div className="text5">
                <p className="metodologia_text">
                  Visualización de datos para comprender, extraer y comunicar
                  los insights de manera que sean fácilmente comprensibles y
                  podamos extraer inteligencia de ellos.
                </p>
              </div>
            </div>
            <div className="metodologia-puntos primer-punto">
              <div>
                <h1 className="metodologia_number">6</h1>
              </div>
              <div className="text6">
                <p className="metodologia_text">
                  Presentación de insights y recomendaciones de negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="metodologia-text-footer">
          <p className="metodologia-text-footer-parrafo">
          {" "}
              La Ciencia de Datos requiere capabilities analíticos, pero también
              una<span> </span>{" "}
              fuerte visión de negocio para poder extraer y transmitir
              recomendaciones adaptadas<span></span>{" "}
            a las necesidades de la empresa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Metodologia;
