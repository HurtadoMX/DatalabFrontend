import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import ScreenClientes from '../pages/Clientes/ScreenClientes'
import ScreenContacto from '../pages/Contacto/ScreenContacto'
import ScreenDataManagement from '../pages/DataManagement/ScreenDataManagement'
import ScreenDataScience from '../pages/DataScience/ScreenDataScience'
import ScreenDataVisualization from '../pages/DataVisualization/ScreenDataVisualization'
import ScreenInicio from '../pages/Inicio/ScreenInicio'
import ScreenMetodologia from '../pages/Metodologia/ScreenMetodologia'
import ScreenServicios from '../pages/Servicios/ScreenServicios'




const AppRouter = () => {
  return (
      <>
      <Routes>

        <Route path='/' element={<ScreenInicio/>}/>
        <Route path='/metodologia' element={<ScreenMetodologia/>}/>
        <Route path='/servicios' element={<ScreenServicios/>}/>
        {/* <Route path='/clientes' element={<ScreenClientes/>}/> */}
        <Route path='/data-management' element={<ScreenDataManagement/>}/>
        <Route path='/data-science' element={<ScreenDataScience/>}/>
        <Route path='/data-visual' element={<ScreenDataVisualization/>}/>
        <Route path='/contacto' element={<ScreenContacto/>}/>
    </Routes>
      </>
  )
}

export default AppRouter