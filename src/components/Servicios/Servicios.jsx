import React from 'react'
import './servicios.css'
import textura from "../../assets/png/Textura2.png"
import Data_Management from "../../assets/svg/Data Management.svg"
import Data_SCIENCE from "../../assets/svg/Data SCIENCE.svg"
import Data_Visualization from "../../assets/svg/Data Visualization.svg"
import {BsArrowRight} from 'react-icons/bs'


const Servicios = () => {
  return (
    <div className='servicios' id='servicios'>
        <div className='servicios-titulo'>
            <hr className='hr' />
            <h1>SERVICIOS</h1>
        </div>
        <img className='servicios-image-puntos' src={textura} alt="" />
        <div className='servicios-group'>
            <h2>Evaluamos, asesoramos y optimizamos en cada fase</h2>
            <p><p>En cada etapa de nuestra colaboracion,</p> <p>nunca dejamos de buscar formas de hacer</p> mas por nuestros clientes</p>
        </div>
        <div className='servicios-items'>
            <div className='servicios-primer-item'>
                <img className='servicios-svg1' src={Data_Management} alt="" />
                <h2>DATA MANEGEMENT</h2>
                <p ><p>Te ayudamos a integrar,</p> estructurar y limpiar tus datos</p>
                <div className='servicios-item-a'>

                <a href="/">Leer más <BsArrowRight className='arrow'/></a>
                </div>
            </div>
            <div className='servicios-segundo-item'>
                <img className='servicios-svg2 servicios-text-h2' src={Data_SCIENCE} alt="" />
                <h2 className=''><p>DATA SCIENCE </p> & ANALYTICS</h2>
                <p><p>Trabajamos en equipo contigo,</p> para entender tus objetivos</p>
               <div className='servicios-item-a'>

                <a href="/">Leer más <BsArrowRight className='arrow'/></a>
               </div>
        </div>


            <div className='servicios-tercer-item'>
                <img className='servicios-svg3' src={Data_Visualization} alt="" />
                <h2>DATA VISUALIZATION</h2>
                <p><p>Te ayudamos a visualizar tus</p> datos de la mejor forma</p>
                <div className='servicios-item-a'>

                <a href="/">Leer más <BsArrowRight className='arrow'/></a>
                </div>

        </div>
    </div>
    </div>
  )
}

export default Servicios