import { useEffect } from 'react';
import {  BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from '@app/Home'
import Contact from '@app/Contact'
import Books from '@app/books/BooksPage'
import { Navigation } from '@components/layout/Navigation'
import { Footer } from '@components/layout/Footer'


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
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/form" element={<Contact/>} />
          <Route path="/books" element={<Books/>} />

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
