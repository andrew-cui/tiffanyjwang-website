import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom'
import NavIcons from './NavIcons.jsx'
import favicon from '/favicon.jpeg'
import '../css/nav.css'
// import sitePages from '../assets/nav_items.json'

const NavBar = ({currentPage}) => {
    const [isOpenMobile, setIsOpen] = useState(false);
    const toggleMobileNavbar = () => {
        setIsOpen(!isOpenMobile)
    }
    // const handleNavbarClick = () => {
    //     if(isOpenMobile) {
    //         setIsOpen(false)
    //     }
    // };

    return (
        <div className="navbar-wrapper w-screen top-0 mx-0">
            {/* Desktop Navigation */}
            <div className="navbar-desktop navbar-flex">
                <div className="navbar-title">
                    <div className="navbar-title-items flex flex-wrap">
                        <div className="author-logo">
                            <img src={favicon} alt="Tiffany Wang" />
                        </div>
                        <Link to={'/'}><h2>Tiffany Wang</h2></Link>
                    </div>
                </div>
                <div className="navbar-links flex">
                    <Link to={'/'} className="navbar-links-item">
                        <h3 className={`navbar-link-text ${currentPage === 'home' ? 'navbar-link-text-active' : ''}`}>Home</h3>
                    </Link>
                    <Link to={'/books'} className="navbar-links-item">
                        <h3 className={`navbar-link-text ${currentPage === 'books' ? 'navbar-link-text-active' : ''}`}>Books</h3>
                    </Link>
                    <Link to={'/blog'} className="navbar-links-item">
                        <h3 className={`navbar-link-text ${currentPage === 'blog' ? 'navbar-link-text-active' : ''}`} style={{color: '#cccccc'}}>Blog (coming soon!)</h3>
                    </Link>
                    <Link to={'/contact'} className="navbar-links-item">
                        <h3 className={`navbar-link-text ${currentPage === 'contact' ? 'navbar-link-text-active' : ''}`}>Contact</h3>
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="navbar-mobile">
                <div className="navbar-mobile-header navbar-flex">
                    <div className="navbar-mobile-title navbar-title">
                        <Link to={'/'} className="navbar-title-items flex flex-wrap">
                            <h2>Tiffany Wang</h2>
                        </Link>
                    </div>
                    {isOpenMobile ?
                    <button className="navbar-mobile-menu" onClick={toggleMobileNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                        <path d="M 0 25 L 50 25" stroke="black" strokeWidth="3" transform="rotate(45 25 25)"/>
                        <path d="M 0 25 L 50 25" stroke="black" strokeWidth="3" transform="rotate(-45 25 25)"/>
                        </svg>
                    </button>
                    :
                    <button className="navbar-mobile-menu" onClick={toggleMobileNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                        <path d="M 0 16 L 0 18 L 50 18 L 50 16 Z M 0 32 L 0 34 L 50 34 L 50 32 Z"></path>
                        </svg>
                    </button>
                    }
                </div>

                {isOpenMobile ?
                <div className="navbar-mobile-overlay">
                    <div className="navbar-mobile-links">
                        <Link to={'/'} className="navbar-links-item" >
                            <h3 className={`navbar-link-text`}>Home</h3>
                        </Link>
                        <Link to={'/books'} className="navbar-links-item" >
                            <h3 className={`navbar-link-text`}>Books</h3>
                        </Link>
                        {/* <Link to={'/blog'} className="navbar-links-item" >
                            <h3 className={`navbar-link-text`}>Blog</h3>
                        </Link> */}
                        <Link to={'/contact'} className="navbar-links-item" >
                            <h3 className={`navbar-link-text`}>Contact</h3>
                        </Link>
                    </div>
                    <div className="navicons-wrapper">
                        <NavIcons/>
                    </div>
                </div>
                : <></>}
            </div>
        </div>
    )
}

export default NavBar