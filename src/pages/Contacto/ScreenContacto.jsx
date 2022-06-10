import React, { useState } from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
import styled from 'styled-components';
import Clientes from "../../components/Clientes/Clientes";
import Contacto from "../../components/Contacto/Contacto";
import DataIcons from "../../components/DataManagement/DataIcons/DataIcons";
import DataManagement from "../../components/DataManagement/DataManagement";
import FooterBlack from "../../components/Footer/FooterBlack";
import Header from "../../components/Header/Header";
import Introduccion from "../../components/Introduccion/Introduccion";
import Metodologia from "../../components/Metodologia/Metodologia";
import DataScience from "../../components/Mobile/DataScience/DataScience";
import DataScienceIcons from "../../components/Mobile/DataScience/DataScienceIcons/DataScienceIcons";
import DataVisualization from "../../components/Mobile/DataVisualization/DataVisualization";
import DataVisualizationIcons from "../../components/Mobile/DataVisualization/DataVisualizationIcons/DataVisualizationIcons";
import Servicios from "../../components/Servicios/Servicios";

const ScreenContacto = () => {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);


  return (
    <div>
  
      
  
    {/* <Header /> */}
    {/* <Introduccion />
     <Metodologia />
     <Servicios />
   <Clientes />
    <DataManagement />
   <DataIcons />

    <DataScience />
     <DataScienceIcons />
   <DataVisualization />
     <DataVisualizationIcons /> */}

    <Contacto />
   <FooterBlack /> 
   <Button>
   <FaArrowCircleUp onClick={scrollToTop} 
   style={{display: visible ? 'inline' : 'none'}} />
  </Button> 
  </div>
  )
}

export const Heading = styled.h1`
   text-align: center;
   margin-right: 20%;
   color: #f4511e;
`;
  
export const Content = styled.div`
   overflow-y: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   margin-right: 10%;
   margin-left: 90%;
   width: 0%;
   bottom: 50px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #f4511e;
   @media screen and (max-width: 960px) {
    margin-right: 10%;
   margin-left: 80%;
  }
`
export default ScreenContacto