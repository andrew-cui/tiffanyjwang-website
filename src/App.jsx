/* Primary SPA router */
import {
  BrowserRouter, Routes, Route, Navigate, useLocation
} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react'
import ScrollToTopUponNewPage from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import './css/App.css'


function App() {

  return (
      <div>
        <ScrollToTopUponNewPage /> 
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/form" element={<Contact/>} />


          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
  )
}


const Root = () => (
  <BrowserRouter  basename="/" future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true,
  }}>
    <App />
  </BrowserRouter>
);

export default Root
