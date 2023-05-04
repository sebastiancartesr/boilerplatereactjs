import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={ <PublicRoutes /> } />

        {/* JournalApp */}
        <Route path="/*" element={ <PrivateRoutes /> } />

    </Routes>
  )
}
