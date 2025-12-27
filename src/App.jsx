import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Welcome from "./pages/Welcome";
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {

  return (
    <div className='min-vh-100 d-flex flex-column justify-content-between'>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:token' element={<ResetPassword />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
