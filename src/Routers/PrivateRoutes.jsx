import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ExmplaPage } from '../Pages/Example/ExmplaPage'
import { Nabvar } from '../Components/Example/Nabvar'
import { PruebaPage } from '../Pages/Example/PruebaPage'

export const PrivateRoutes = () => {
  return (
      <Nabvar>
        <Routes>
          <Route path="/" element={ <ExmplaPage /> } />
          <Route path="/prueba" element={ <PruebaPage /> } />
          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
      </Nabvar>
  )
}
