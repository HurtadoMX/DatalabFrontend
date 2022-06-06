import React from "react";
import Clientes from "../Clientes/Clientes";
import Contacto from "../Contacto/Contacto";
import DataIcons from "../DataManagement/DataIcons/DataIcons";
import DataManagement from "../DataManagement/DataManagement";
import FooterBlack from "../Footer/FooterBlack";
import Header from "../Header/Header";
import Introduccion from "../Introduccion/Introduccion";
import Metodologia from "../Metodologia/Metodologia";
import DataScience from "../Mobile/DataScience/DataScience";
import DataScienceIcons from "../Mobile/DataScience/DataScienceIcons/DataScienceIcons";
import DataVisualization from "../Mobile/DataVisualization/DataVisualization";
import DataVisualizationIcons from "../Mobile/DataVisualization/DataVisualizationIcons/DataVisualizationIcons";
import Servicios from "../Servicios/Servicios";

const Home = () => {
  return (
    <div>
      <Header />
      <Introduccion />
       <Metodologia />
      <Servicios />
     <Clientes />
       <DataManagement />
      <DataIcons />

      <DataScience />
     <DataScienceIcons />
      <DataVisualization />
      <DataVisualizationIcons />

      <Contacto />
     <FooterBlack /> 
    </div>
  );
};

export default Home;
