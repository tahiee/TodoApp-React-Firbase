import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from '../components/Navbar'
import Home from '../screens/Home'
import Register from '../screens/Register'
import Login from '../screens/Login'
import ProtectedRoutes from './ProtectedRoutes'

const Router = () => {
    return (
        <BrowserRouter>
            <ResponsiveAppBar />
            <Routes>
                <Route path='/' element={<ProtectedRoutes component={<Home />} />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router