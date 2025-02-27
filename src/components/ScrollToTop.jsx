import { useEffect } from 'react';
import {
    useLocation
} from 'react-router-dom'
  
  const ScrollToTopUponNewPage = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top whenever the route changes
    }, [location]);
    return null;
  };

export default ScrollToTopUponNewPage;