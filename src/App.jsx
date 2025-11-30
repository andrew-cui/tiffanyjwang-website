/* Primary SPA router */
import {
  BrowserRouter, Routes, Route, Navigate, useLocation
} from 'react-router-dom'
import ScrollToTopUponNewPage from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Books_InfernosHeir from './pages/Books-InfernosHeir.jsx'
import './css/App.css'


function App() {
  const location = useLocation();

  return (
      <div>
        <ScrollToTopUponNewPage /> 
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/home" element={<Home/>} /> */}
          <Route path="/contact" element={<Contact/>} />
          <Route path="/form" element={<Contact/>} />
          <Route path="/books" element={<Books_InfernosHeir/>} />


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
