import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Link, useLocation, useNavigate
} from 'react-router-dom'
import '@css/nav.css'
import { NavIcons } from '@components/NavIcons'
import { Hyperlink } from '@components/Hyperlink'
import favicon from '/favicon-no-bg.png'
import nav_top_links from '@data/pagesData.json'
import books from '@data/bookData'

// Top Navigation
export function NavBar () {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;
    console.log(currentPage)
    const [isOpenMobile, setIsOpen] = useState(false);
    const toggleMobileNavbar = () => {  setIsOpen(!isOpenMobile)    }

    return (
        <div className="nav-top">
            {/* Title */}
            <div className="nav-title flex flex-wrap">
                <img className="nav-title-logo" src={favicon} alt="Tiffany Wang" />
                <h2 className="nav-title-name"><Link to={'/'}>tiffany wang</Link></h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-desktop">
            {nav_top_links.map((item, index) => {
                    if(item.title === 'books') {

                        return (
                            <div className="nav-desktop-books">
                                <Hyperlink
                                    key = {index}
                                    title = {item.title}
                                    href = {item.link}
                                    disabled = {item.disabled}
                                    classes = {(item.classes ?? ' ') + ' nav-link-desktop nav-link-desktop-book' + ((currentPage === item.link || '/' + currentPage === item.link) ? 'hyperlink-active' : '')} 
                                    sitePage = {true}
                                />
                                <div className="nav-desktop-books-dropdown">
                                {books.filter(book => book.nav).map((book, bookIndex) => (
                                    <Hyperlink
                                        key = {bookIndex}
                                        title = {<>{book.title}</>}
                                        href = {item.link}
                                        disabled = {false}
                                        classes = {(item.classes ?? ' ') + ' nav-link-desktop nav-link-desktop-dropdown-book'} 
                                        sitePage = {true}
                                        onClick = {() => {
                                            navigate("/books", {
                                            state: { scrollTo: book.html_id }
                                            })
                                        }
                                        }
                                    />
                                ))}
                                </div>
                            </div>
                        );
                    }
                    return (
                    <Hyperlink
                        key = {index}
                        title = {item.title}
                        href = {item.link}
                        disabled = {item.disabled}
                        classes = {(item.classes ?? ' ') + ' nav-link-desktop ' + ((currentPage === item.link || '/' + currentPage === item.link) ? 'hyperlink-active' : '')} 
                        sitePage = {true}
                    />)
            })}
            </div>

            {/* Mobile Navigation */}
            <div className="nav-mobile">
                <div className="nav-mobile-menu nav-flex">
                    {isOpenMobile ?
                    <button className="nav-mobile-button" onClick={toggleMobileNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                        <path d="M 0 25 L 50 25" stroke="black" strokeWidth="3" transform="rotate(45 25 25)"/>
                        <path d="M 0 25 L 50 25" stroke="black" strokeWidth="3" transform="rotate(-45 25 25)"/>
                        </svg>
                    </button>
                    :
                    <button className="nav-mobile-button" onClick={toggleMobileNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                        <path d="M 0 16 L 0 18 L 50 18 L 50 16 Z M 0 32 L 0 34 L 50 34 L 50 32 Z"></path>
                        </svg>
                    </button>
                    }
                </div>
                
                <AnimatePresence>
                    {isOpenMobile && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: "hidden" }}
                    >
                    <div className="nav-mobile-dropdown">
                        <div className="nav-mobile-items">
                            {nav_top_links.map((item, index) => (
                                <Link 
                                key={index} 
                                to={item.link} 
                                style={{pointerEvents: item.disabled ? 'none' : 'auto'}} 
                                className={`nav-link-mobile`}
                                onClick={toggleMobileNavbar}
                                >
                                    <h3 className={`nav-link-mobile-text ` + (currentPage === item.title ? 'nav-link-text-active' : '')}>
                                        {item.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                        <div className="nav-mobile-icons">
                            <NavIcons/>
                        </div>
                    </div>
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    )
}

