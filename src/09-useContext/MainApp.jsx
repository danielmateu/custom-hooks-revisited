
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './AboutPage'
import { UserProvider } from './context/USerProvider'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import { Navbar } from './Navbar'

export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar/>
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
                <Route path='*' element={<Navigate to='/about' />} />
            </Routes>
        </UserProvider>
    )
}
