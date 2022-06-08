import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
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
import styled from 'styled-components';

const Home = () => {


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
     <Button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button> 
    </div>
  );
};

export const Heading = styled.h1`
   text-align: center;
   margin-right: 20%;
   color: #f4511e;
`;
  
export const Content = styled.div`
   overflowY: scroll;
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

export default Home;
