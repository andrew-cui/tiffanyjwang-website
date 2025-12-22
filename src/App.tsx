import { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate, useLocation
} from 'react-router-dom'
import Home from '@pages/Home'
import Contact from '@pages/Contact'
import Books from '@pages/Books'
import { NavBar } from '@components/NavBar'
import { NavIcons } from '@components/NavIcons'
import '@css/App.css'


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
        <NavBar/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/form" element={<Contact/>} />
          <Route path="/books" element={<Books/>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <NavIcons/>
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
