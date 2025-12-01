/* Primary SPA router */
import { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate, useLocation
} from 'react-router-dom'
// import { TopOfPage } from './components/SiteComponents.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Books from './pages/Books.jsx'
import './css/App.css'


function TopOfPage () {
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top whenever the route changes
    }, [useLocation()]);
    return;
}

function App() {
  const location = useLocation();

  return (
      <div>
        <TopOfPage /> 
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/home" element={<Home/>} /> */}
          <Route path="/contact" element={<Contact/>} />
          <Route path="/form" element={<Contact/>} />
          <Route path="/books" element={<Books/>} />

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
