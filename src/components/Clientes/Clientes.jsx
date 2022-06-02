import React from "react";
import './clientes.css'
import MonteXanic from "../../assets/png/MonteXanic.png"
import LocoTequila from "../../assets/png/LocoTequila.png"
import IBERO from "../../assets/png/IBERO.png"
import Monte_Pío from "../../assets/png/Monte-Pío.png"
import Corporación_RICA from "../../assets/png/Corporación-RICA.png"
import genomma_lab from "../../assets/png/genomma-lab.png"
import GobCDMX from "../../assets/png/GobCDMX.png"
import SACMEX from "../../assets/png/SACMEX.png"




const Clientes = () => {
  return (
    <div className="clientes" id="clientes">
        <div className="clientes-titulo">
          <hr className="hr" />
            <h1>CLIENTES</h1>
        </div>
        <div className="clientes-agroup">
      <div className="clientes-flex">

        <img className="clientes-imagen" src={MonteXanic} alt="MonteXanic" />
        <img className="clientes-imagen" src={LocoTequila} alt="Loco tequila" />
        <img className="clientes-imagen" src={IBERO} alt="IBERO" />
        <img className="clientes-imagen" src={Monte_Pío} alt="Montepio" />
      </div>
      <hr className="hr-items" />
      <div className="clientes-flex">
        <img className="clientes-imagen" src={Corporación_RICA} alt="RICA" />
        <img className="clientes-imagen" src={genomma_lab} alt="Genomma Lab Internacional" />
        <img className="clientes-imagen" src={GobCDMX} alt="Gobierno" />
        <img className="clientes-imagen" src={SACMEX} alt="SACMEX" />
      </div>
        </div>
    </div>
  );
};

export default Clientes;
