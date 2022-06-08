import React from 'react'
import './DataVisualizationIcons.css'
import Custom from "../../../../assets/svg/Custom Dashboards.svg";
import lateral from "../../../../assets/png/LATERAL-DERECHA.png"


const DataVisualizationIcons = () => {
  return (
    <>
          {/* <img className="derecha-visual" src={lateral} alt="" />
      <img className="derecha-visual2" src={lateral} alt="" /> */}
    <div className="dataIcons">
      <div className="dataIcons-container-visual">
        <div className="dataIcons-group1">
          <div className="item">
            <img className="dataIcons-image" src={Custom} alt="" />
            <h2>
              <p>Custom</p> Dashboards
            </h2>
            <div className="dataIcons-parrafo">
              <p>
                Desarrollamos dashboards y reportes personalizados en base a las
                necesidades de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* ESTE ITEM ES EL QUE SE MOSTRARA EN EL RESPONSIVE */}
      <div className="dataIcons-container2-visual">
        <div className="dataIcons-group1">
          <div className="icono-item1">
            <div className="icono-responsive">
              <img src={Custom} alt="" />
              <h2>
                <p>Custom</p> Dashboards
              </h2>
            </div>
            <div className="item">
              <div className="dataIcons-parrafo">
                <p>
                  Desarrollamos dashboards y reportes personalizados en base a
                  las necesidades de nuestros clientes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default DataVisualizationIcons