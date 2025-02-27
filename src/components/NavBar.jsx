import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom'
// import NavIcons from './NavIcons.jsx'
import '../css/nav.css'
// import sitePages from '../assets/nav_items.json'

const NavBar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div className="navbar-wrapper">
            {/* Desktop Navigation */}
            <div className="navbar-desktop w-screen top-0 hidden md:block flex-container">
            <Link to={'/'}>
                <div className="author-title">
                    <h2>Tiffany Wang</h2>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default NavBar