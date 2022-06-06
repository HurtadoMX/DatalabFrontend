import React from 'react'
import Data_Management from "../../../assets/png/Custom-Dashboards.png"
import './dataVisualization.css'

const DataVisualization = () => {
  return (
    <div className='data3' id='visual'>
    <div className='data-titulo3'>
        <hr className='hr_metodologia' />
        <h1>DATA VISUALIZATION</h1>
    </div>







    <div className='data-group-visual'>
        <div className='data-group-1'>
            <img src={Data_Management} alt="" />
            <h3>Visualizaciones de </h3>
            <h2>Datos para la toma <p>de decisiones</p></h2>
        </div>
        <div className='data-group-2'>
            <p>La visualización de datos permite comprender grandes cantidades de datos de un vistazo y de una mejor manera para la toma de decisiones.</p>
            <p>Trabajamos con las empresas para definir e implementar estrategias de Data Visualization y Reporting para transformar los datos en dashboards, reportes y presentaciones para un mejor entendimiento de los insights, facilitar la toma de decisiones y comunicarlas a los equipos de trabajo.</p>
        </div>
    </div>





    {/* ESTE ITEM ES PARA LA VERSION MOBILE Y DE TABLETA */}
    <div className='data-group-mobile-visual'>
        <div className='data-group-1'>
            <div className='items-column'>
            <h3>Visualizaciones de </h3>
            <img src={Data_Management} alt="" />
            </div>
            <h2>Datos para la toma de decisiones</h2>
        </div>
        <div className='data-group-2'>
            <p className='parrafo1'>La visualizacion de datos permite comprender grandes cantidades de datos de un vistazo y de una mejor manera para la toma de decisiones.</p>
            <p className='parrafo2'>Trabajamos con las empresas para definir e implementar estrategias de Data Visualization y Reporting para transformar los datos en dashboards, reportes y presentaciones para un mejor entendimiento de los insights, facilitar la toma de decisiones y comunicarlas a los equipos de trabajo</p>
        </div>
    </div>


    
</div>
  )
}

export default DataVisualization