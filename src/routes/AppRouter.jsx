import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clientes from '../components/Clientes/Clientes'
import Contacto from '../components/Contacto/Contacto'
import DataIcons from '../components/DataManagement/DataIcons/DataIcons'
import DataManagement from '../components/DataManagement/DataManagement'
import Home from '../components/Home/Home'
import Metodologia from '../components/Metodologia/Metodologia'
import Servicios from '../components/Servicios/Servicios'



const AppRouter = () => {
  return (
      <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/metodologia' element={<Metodologia/>}/>
        <Route path='/datamanagement' element={<DataManagement/>}/>
        <Route path='/datamanagementIcons' element={<DataIcons/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/clientes' element={<Clientes/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
    </Routes>
      </>
  )
}

export default AppRouter