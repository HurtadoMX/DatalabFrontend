import React from 'react'


import Data_Management from "../../../assets/png/Data-Analytics.png"
import './dataScience.css'



const DataScience = () => {
  return (
    <div className='data2' id='science'>
    <div className='data-titulo2'>
        <hr className='hr_science' />
        <h1>DATA SCIENCE <p>& ANALYTICS</p></h1>
    </div>







    <div className='data-group-escritorio'>
        <div className='data-group-1'>
            <img src={Data_Management} alt="" />
            <h3>Transforma y  </h3>
            <h2>Acelera tu Negocio</h2>
        </div>
        <div className='data-group-2'>
        <p className='parrafo1'>La integración de datos no es suficiente. El objetivo no es tener datos sino utilizarlos de la mejor forma.</p>
            <p className='parrafo2'>Trabajamos en equipo para comprender los objetivos más importantes de tu negocio para poder analizar los datos e identificar insights que faciliten implementación de acciones que generen crecimiento y un mejor ROI</p>
        </div>
    </div>





    {/* ESTE ITEM ES PARA LA VERSION MOBILE Y DE TABLETA */}
    <div className='data-group-mobile2-science'>
        <div className='data-group-1'>
            <div className='items-column'>
            <h3>Transforma y</h3>
            <img src={Data_Management} alt="" />
            </div>
            <h2>Acelera tu Negocio</h2>
        </div>
        <div className='data-group-2'>
            <p className='parrafo1'>La integracion de datos no es suficiente. El objetivo no es tener datos sino utilizarlos de la mejor forma</p>
            <p className='parrafo2'>Trabajamos en equipo para comprender los objetivos mas importantes de tu negocio para poder analizar los datos e identificar insights que faciliten implementacion de acciones que generen crecimiento y un mejor ROI</p>
        </div>
    </div>


    
</div>
  )
}

export default DataScience