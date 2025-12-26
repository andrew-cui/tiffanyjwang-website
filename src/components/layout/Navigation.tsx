import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import Footer from '@components/layout/Footer'
import Hyperlink from '@components/ui/Hyperlink'
import { AnimatePageLoad } from '@animations/AnimatePageLoad'
import favicon from '/favicon-no-bg.png'
import pagesData from '@data/pagesData.json'
import books from '@data/bookData'
import css from '@styles/components/nav.module.css'

// Top Navigation
export default function Navigation ({
    dots = true
} : {
    dots?: boolean
}) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPage = location.pathname;
    const [isOpenMobile, setIsOpen] = useState(false);
    const toggleMobileNavbar = () => {  setIsOpen(!isOpenMobile)    }

    return (
        <div className={css.navbar}>
            {/* Header */}
            <div className={css.nav__header}>
                <img className={css.nav__header_logo} src={favicon} alt="Tiffany Wang" />
                <h2 className={css.nav__header_title}><Link to={'/'}>tiffany wang</Link></h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className={css['nav--desktop']}>
            {pagesData.map((item, index) => {
                // Dropdown for book
                if(item.title === 'books') {
                    return (
                        <div key={index} className={css['nav--desktop__item_container']}>
                        <div className={css['nav--desktop__books']}>
                            <Hyperlink
                                text = {item.title}
                                href = {item.link}
                                classes = {
                                    clsx(item.classes,
                                        css['nav--desktop__link'])} 
                                active = {(currentPage === item.link || '/' + currentPage === item.link)}
                                disabled = {item.disabled}
                            />
                            <div className={css['nav--desktop__books_menu']}>
                            {books.filter(book => book.nav).map((book, bookIndex) => (
                                <Hyperlink
                                    key = {bookIndex}
                                    text = {<>{book.title}</>}
                                    href = {item.link}
                                    classes = {
                                        clsx(item.classes,
                                            css['nav--desktop__link'],
                                            css['nav--desktop__link_books'])} 
                                    onClick = {() => {
                                        navigate("/books", {    state: { scrollTo: book.html_id }   })
                                    }}
                                />
                            ))}
                            </div>
                        </div>
                        {dots && (<i className="bi bi-dot"></i>)}
                            </div>
                    );
                }
                return (
                    <div key={index} className={css['nav--desktop__item_container']}><Hyperlink
                        text = {item.title}
                        href = {item.link}
                        classes = {
                            clsx(item.classes,
                                css['nav--desktop__link'])} 
                        active = {(currentPage === item.link || '/' + currentPage === item.link)}
                        disabled = {item.disabled}
                    />
                    {(dots && index < pagesData.length - 1) && (<i className="bi bi-dot"></i>)}
                    </div>
                )
            })}
            </div>

            {/* Mobile Navigation */}
            <div className={css['nav--mobile']}>
                <div className={css['nav--mobile__toggle']}>
                    {isOpenMobile ?
                    <button className={css['nav--mobile__toggle_button']} onClick={toggleMobileNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                        <path d="M 0 25 L 50 25" stroke="black" strokeWidth="3" transform="rotate(45 25 25)"/>
                        <path d="M 0 25 L 50 25" stroke="black" strokeWidth="3" transform="rotate(-45 25 25)"/>
                        </svg>
                    </button>
                    :
                    <button className={css['nav--mobile__toggle_button']} onClick={toggleMobileNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                        <path d="M 0 16 L 0 18 L 50 18 L 50 16 Z M 0 32 L 0 34 L 50 34 L 50 32 Z"></path>
                        </svg>
                    </button>
                    }
                </div>
                
                {isOpenMobile && (
                    <AnimatePageLoad 
                        duration = {0.25}
                        ReactDOMElement={
                    <div className={css['nav--mobile__menu']}>
                        <div className={css['nav--mobile__item_container']}>
                            {pagesData.map((item, index) => (
                                <Link 
                                key={index} 
                                to={item.link} 
                                style={{pointerEvents: item.disabled ? 'none' : 'auto'}} 
                                className={css['nav--mobile__link']}
                                onClick={toggleMobileNavbar}>
                                    <h3 className={
                                        clsx(css['nav--mobile__link_text'])}
                                    >{item.title}</h3>
                                </Link>
                            ))}
                        </div>
                        <div className={css['nav--mobile__icons']}>
                            <Footer/>
                        </div>
                    </div>
                    }/>)}
            </div>

        </div>
    )
}

