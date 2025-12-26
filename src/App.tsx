import { useEffect } from 'react';
import {  BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import HomePage from '@app/HomePage'
import ContactPage from '@app/ContactPage'
import BooksPage from '@app/books/BooksPage'
import { Navigation, Footer } from '@components'

function TopOfPage (): null {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location.pathname]);
  return null;
}

function App() {
  const location = useLocation();

  return (
      <div>
        <TopOfPage /> 
        <Navigation/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/form" element={<ContactPage/>} />
          <Route path="/books" element={<BooksPage/>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer/>
      </div>
  )
}


const Root = () => (
  <BrowserRouter  
    basename="/" 
    {...({
      future: {
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      },
    } as any)}>
    <App />
  </BrowserRouter>
);

export default Root
