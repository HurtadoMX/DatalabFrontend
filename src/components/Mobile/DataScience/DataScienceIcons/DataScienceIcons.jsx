import React from "react";

import Logística from "../../../../assets/svg/Logística.svg";
import Marketing from "../../../../assets/svg/Marketing.svg";
import Retail from "../../../../assets/svg/Retail.svg";

import './DataScienceIcons.css'
import lateral from "../../../../assets/png/LATERAL-DERECHA.png"


const DataScienceIcons = () => {
  return (
    <>
      {/* <img className="derecha-icons" src={lateral} alt="" />
      <img className="derecha-icons2" src={lateral} alt="" /> */}
    <div className="dataIcons">
      <div className="dataIcons-container-escritorio">
        <div className="dataIcons-group1">
          <div className="item">
            <img className="dataIcons-image" src={Retail} alt="" />
            <h2>Retail</h2>

            <div className="dataIcons-parrafo">
              <p>Optimización de Precios</p>
              <p>
                Carcaterización puntos de ventas por zona e identificación de
                competencia
              </p>
              <p>
                Planificación territorial para estrategias comerciales y de
                marketing
              </p>
              <p>
                Identificación y análisis de ubicacionnes y zonas idóneas para
                estrategias de expansión y apertura de nuevos puntos de venta
              </p>
            </div>
          </div>

          <div className="item">
            {" "}
            <img className="dataIcons-image" src={Marketing} alt="" />
            <h2>Marketing</h2>
            <div className="dataIcons-parrafo2">
              <p>Media Mix Modeling</p>
              <p>Media Planning</p>
              <p>Optimización Pauta Digital</p>
              <p>Market Forecasting</p>
              <p>Clusters Clientes Potencial</p>
              <p>Identificación de características sociodemográficas</p>
            </div>
          </div>
          <div className="item">
            {" "}
            <img className="dataIcons-image" src={Logística} alt="" />
            <h2>Logistica</h2>
            <div className="dataIcons-parrafo">
              <p>Optimización de canales y rutas de distribución</p>
            </div>
          </div>
        </div>
      </div>














      {/* ESTE ITEM ES EL QUE SE MOSTRARA EN EL RESPONSIVE */}
      <div className="dataIcons-container-mobile">
        <div className="dataIcons-group1">
          <div className="icono-item1">
            <div className="icono-responsive">
              <img src={Retail} alt="" />
              <h2>Retail</h2>
            </div>
            <div className="item">
              <div className="dataIcons-parrafo">
                <p>Optimizacion de Precios</p>
                <p>
                  Carcaterizacion puntos de ventas por zona e identificacion de
                  competencia
                </p>
                <p>
                  Planificacion territorial para estrategias comerciales y de
                  marketing
                </p>
                <p>
                  Identificacion y analisis de ubicacionnes y zonas ideoneas
                  para estrategias de expansion y apertura de nuevos puntos de
                  venta
                </p>
              </div>
            </div>
          </div>

          <div className="icono-item2">
            <div className="icono-responsive">
              <img src={Marketing} alt="" />
              <h2>Marketing</h2>
            </div>
            <div className="item">
              {" "}
              <div className="dataIcons-parrafo">
                <p>Media Mix Modeling</p>
                <p>Media Planning</p>
                <p>Optimizacion Pauta Digital</p>
                <p>Market Forecasting</p>
                <p>Clusters Clientes Potencial</p>
                <p>Identificacion de caracteristicas sociodemograficas</p>
              </div>
            </div>
          </div>

          <div className="icono-item3">
            <div className="icono-responsive">
              <img src={Logística} alt="" />
              <h2>Logistica</h2>
            </div>
            <div className="item">
              {" "}
              <div className="dataIcons-parrafo">
                <p>Optimizacion de canales y rutas de distribucion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default DataScienceIcons;
