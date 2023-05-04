import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ExmplaPage } from '../Pages/Example/ExmplaPage'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <ExmplaPage /> } />
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
