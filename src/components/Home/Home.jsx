import React from 'react'
import Clientes from '../Clientes/Clientes'
import Contacto from '../Contacto/Contacto'
import DataIcons from '../DataManagement/DataIcons/DataIcons'
import DataManagement from '../DataManagement/DataManagement'
import FooterBlack from '../Footer/FooterBlack'
import Header from '../Header/Header'
import Introduccion from '../Introduccion/Introduccion'
import Metodologia from '../Metodologia/Metodologia'
import Servicios from '../Servicios/Servicios'



const Home = () => {


  return (
    <div>

        <Header />
        <Introduccion/>
         <Metodologia/>
       <Servicios/>
         <Clientes/>
        <DataManagement/>
        <DataIcons/>
        <Contacto/>
        <FooterBlack/>
    </div>
  )
}

export default Home