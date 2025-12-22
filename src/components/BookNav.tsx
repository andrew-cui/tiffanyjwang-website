import { useState } from 'react';
import type { BookData } from "@models/booktypes";
import '@css/booknavigation.css'
import { motion, AnimatePresence } from 'framer-motion';

type BookNavProps = {
    bookData: BookData[];
    handleBookClick: (book: BookData) => void;
    activeBook: BookData;
};

export function BookNav ({ 
    bookData,
    handleBookClick,
    activeBook,
    } : BookNavProps) {

    const [isOpenBookNav, setIsOpen] = useState(false);
    const toggleBookNav = () => {  
        setIsOpen(!isOpenBookNav)    
    }

    return (
        <div className="book-navigation-container">
            <div className="app-container">
                <div className="book-navigation">
                    {/* Top navigation item */}
                    <button 
                        className="book-navigation-item"
                        onClick={() => {
                            toggleBookNav();
                        }}>
                        <div className="book-navigation-item-cover"><img src={activeBook ? activeBook.img_src : bookData[0].img_src}></img></div>
                        <div className="book-navigation-item-title">
                            <h3>{activeBook ? activeBook.title : bookData[0].title}</h3>
                            <h5>{activeBook ? activeBook.library_subtitle : bookData[0].library_subtitle}</h5>
                        </div>
                        <div className="book-navigation-item-icon">
                            {isOpenBookNav ? 
                                <i className="bi bi-toggle-on"></i> : 
                                <i className="bi bi-toggle-off"></i>
                            }
                        </div>
                    </button>

                    {/* Dropdown navigation item */}
                    <AnimatePresence>
                    {isOpenBookNav && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden" }} className="book-navigation-dropdown">
                            {bookData.map((book, index) => (
                                <button 
                                    key={index} 
                                    className="book-navigation-item"
                                    onClick={() => {
                                        toggleBookNav();
                                        setTimeout(() => handleBookClick(book), 0);
                                    }}>
                                    <div className="book-navigation-item-cover"><img src={book.img_src}></img></div>
                                    <div className="book-navigation-item-title">
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