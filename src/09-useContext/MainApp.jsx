import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />
            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
                <Route path='*' element={<Navigate to='/about'/>} />
            </Routes>
        </>
    )
}
