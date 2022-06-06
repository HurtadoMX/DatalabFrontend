import React from "react";
import "./dataManagement.css";
import Data_Management from "../../assets/png/Data-Management.png";

const DataManagement = () => {
  return (
    <div className="data" id="data">
      <div className="data-titulo">
        <hr className="hr_metodologia" />
        <h1>DATA MANAGEMENT</h1>
      </div>

      {/* ESTA ES LA IMAGEN QUE VA EN LA VERSION RESPONSIVE */}

      <div className="data-group">
        <div className="data-group-1">
          <img src={Data_Management} alt="" />
          <h3>Intregra </h3>
          <h2>Tus Datos</h2>
        </div>
        <div className="data-group-2">
          <p>
            Los datos de tu empresa pueden ser uno de tus activos más valiosos,
            si los usas correctamente.
          </p>
          <p>
            Te ayudamos a integrar, transformar, estructurar y limpiar tus datos
            para que sean utilizables para el analisis y puedas realizar su
            potencial.
          </p>
        </div>
      </div>

      {/* ESTE ITEM ES PARA LA VERSION MOBILE Y DE TABLETA */}
      <div className="data-group-mobile">
        <div className="data-group-1">
          <div className="items-column">
            <h3>Intregra </h3>
            <img src={Data_Management} alt="" />
          </div>
          <h2>Tus Datos</h2>
        </div>
        <div className="data-group-2">
          <p className="parrafo1">
            Los datos de tu empresa pueden ser uno de tus activos mas valiosos,
            si los usas correctamente.
          </p>
          <p className="parrafo2">
            Te ayudamos a integrar, transformar, estructurar y limpiar tus datos
            para que sean utilizables para el analisis y puedas realizar su
            potencial
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataManagement;
