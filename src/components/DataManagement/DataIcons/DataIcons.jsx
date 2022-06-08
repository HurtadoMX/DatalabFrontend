import React from "react";
import "./dataIcons.css";
import Data_Architecture from "../../../assets/svg/Data Architecture.svg";
import Data_Integration from "../../../assets/svg/Data Integration.svg";
import Data_Quality from "../../../assets/svg/Data Quality.svg";
import Data_Storage from "../../../assets/svg/Data Storage.svg";
import Data_Analytics from "../../../assets/svg/Data Analytics.svg";
import lateral from "../../../assets/png/LATERAL-DERECHA.png"

const DataIcons = () => {
  return (
    <>
   
          <img className="derecha-data" src={lateral} alt="" />
      <img className="derecha-data2"src={lateral} alt="" />
    <div className="dataIcons">
      <div className="dataIcons-container">
        <div className="dataIcons-group1">
          <div className="item">
            <img className="dataIcons-image" src={Data_Architecture} alt="" />
            <h2>
              <p>Data</p> Architecture
            </h2>
            <div className="dataIcons-parrafo">
              <p>
                Diseñamos la arquitectura de datos pra capturar, integrar,
                almacenar, analizar y utilizar los datos.
              </p>
            </div>
          </div>
          <div className="item">
            {" "}
            <img className="dataIcons-image" src={Data_Integration} alt="" />
            <h2>
              <p>Data</p> Integration
            </h2>
            <div className="dataIcons-parrafo">
              <p>
                Consolidamos los datos de distintas fuentes con procesos de
                extracción y transformación de datos.
              </p>
            </div>
          </div>
          <div className="item">
            {" "}
            <img className="dataIcons-image" src={Data_Quality} alt="" />
            <h2>
              <p>Data</p> <p>Quality</p> Management
            </h2>
            <div className="dataIcons-parrafo2">
              <p>
                Estructuramos y limpiamos tus datos para asegurar la calidad de
                la información.
              </p>
            </div>
          </div>
        </div>
        <div className="dataIcons-group2">
          <div className="item">
            {" "}
            <img className="dataIcons-image" src={Data_Storage} alt="" />
            <h2>
              <p>Data</p> Storage
            </h2>
            <div className="dataIcons-parrafo">
              <p>
                Implementamos soluciones de almacenamiento para datos diferentes
                escalas y formatos
              </p>
            </div>
          </div>
          <div className="item">
            {" "}
            <img className="dataIcons-image" src={Data_Analytics} alt="" />
            <h2>
              <p>Data</p> <p>Analytics</p> & Reporting
            </h2>
            <div className="dataIcons-parrafo2">
              <p>
                Diseñamos la infraestructura para Data Analytics, BI y Reporting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ESTE ITEM ES EL QUE SE MOSTRARA EN EL RESPONSIVE */}
      <div className="dataIcons-container2">
        <div className="dataIcons-group1">
          <div className="icono-item1">
            <div className="icono-responsive">
              <img src={Data_Architecture} alt="" />
              <h2>
                <p>Data</p> Architecture
              </h2>
            </div>
            <div className="item">
              <div className="dataIcons-parrafo">
                <p>
                  Diseñamos la arquitectura de datos pra capturar, integrar,
                  almacenar, analizar y utilizar los datos
                </p>
              </div>
            </div>
          </div>

          <div className="icono-item2">
            <div className="icono-responsive">
              <img src={Data_Integration} alt="" />
              <h2>
                <p>Data</p> Integration
              </h2>
            </div>
            <div className="item">
              {" "}
              <div className="dataIcons-parrafo">
                <p>
                  Consolidamos los datos de distintas fuentes con procesos de
                  extraccion y transformacion de datos
                </p>
              </div>
            </div>
          </div>

          <div className="icono-item3">
            <div className="icono-responsive">
              <img src={Data_Quality} alt="" />
              <h2>
                <p>Data Quality</p> Management
              </h2>
            </div>
            <div className="item">
              {" "}
              <div className="dataIcons-parrafo">
                <p>
                  Estructuramos y limpiamos tus datos para asegurar la calidad
                  de la informacion.
                </p>
              </div>
            </div>
          </div>

          <div className="icono-item4">
            <div className="icono-responsive">
              <img src={Data_Storage} alt="" />
              <h2>
                <p>Data</p> Storage
              </h2>
            </div>
            <div className="item">
              {" "}
              <div className="dataIcons-parrafo">
                <p>
                  Implementamos soluciones de almacenamiento para datos
                  diferentes escalas y formatos
                </p>
              </div>
            </div>
          </div>

          <div className="icono-item5">
            <div className="icono-responsive">
              <img src={Data_Analytics} alt="" />
              <h2>
                <p>Data Analytics</p> & Reporting
              </h2>
            </div>
            <div className="item">
              {" "}
              <div className="dataIcons-parrafo">
                <p>
                  Diseñamos la infraestructura para Data Analytics, BI y
                  Reporting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DataIcons;
