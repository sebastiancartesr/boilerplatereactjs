import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Pages/Auth/LoginPage'
import { RegisterPage } from '../Pages/Auth/RegisterPage'
import { ForgotPasswordPage } from '../Pages/Auth/ForgotPasswordPage'

export const PublicRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="forgotpass" element={ <ForgotPasswordPage /> } />
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
