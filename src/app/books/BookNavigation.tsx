/* BookNav 
 * ui banner that appears to allow navigation between books
 */

// packages 
import { useState } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

// components, styles & data
import css from '@styles/app/books/bookNav.module.css'

// interfaces
import type { BookProps } from "@/types/book"
type BookNavProps = {
    bookData: BookProps[];
    handleBookClick: (book: BookProps) => void;
    activeBook: BookProps;
}

// render
export default function BookNav ({ 
    bookData,
    handleBookClick,
    activeBook,
} : BookNavProps) {

    const [isOpenBookNav, setIsOpen] = useState(false);
    const toggleBookNav = () => {  
        setIsOpen(!isOpenBookNav)    
    }

    return (
        <div className={clsx(css.bookNav__container)}>
            <div className="app_container">
                <div className={clsx(
                    css.bookNav
                )}>
                    {/* Top navigation item */}
                    <button 
                        className={clsx(
                            css.bookNav__selector
                        )}
                        onClick={() => {
                            toggleBookNav();
                        }}>
                        <div className={clsx(css.bookNav__selector_image)}><img src={activeBook ? activeBook.img_src : bookData[0].img_src}></img></div>
                        <div className={clsx(css.bookNav__selector_text)}>
                            <h3>{activeBook ? activeBook.title : bookData[0].title}</h3>
                            <h5>{activeBook ? activeBook.library_subtitle : bookData[0].library_subtitle}</h5>
                        </div>
                        <div className={clsx(css.bookNav__selector_icon)}>
                            {isOpenBookNav ? 
                                <i className="bi bi-toggle-on"></i> : 
                                <i className="bi bi-toggle-off"></i>
                            }
                        </div>
                    </button>

                    {/* Dropdown navigation item */}
                    <AnimatePresence>
                    {isOpenBookNav && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ overflow: "hidden" }} 
                        className={clsx(css.bookNav__menu)}>
                            {bookData.map((book, index) => (
                                <button 
                                    key={index} 
                                    className={clsx(
                                        css.bookNav__menu_item, 
                                        css.bookNav__selector)}
                                    onClick={() => {
                                        toggleBookNav();
                                        setTimeout(() => handleBookClick(book), 0);
                                    }}>
                                    <div className={clsx(
                                        css.bookNav__menu_item_image, 
                                        css.bookNav__selector_image)}>
                                            <img src={book.img_src}></img>
                                    </div>
                                    <div className={clsx(
                                        css.bookNav__menu_item_text, 
                                        css.bookNav__selector_text)}>
                                        <h3>{book.title}</h3>
                                        <h5>{book.library_subtitle}</h5>
                                    </div>
                                </button>
                            ))}
                        </motion.div>
                    )}</AnimatePresence>
                </div>
            </div>
        </div>
    )
}