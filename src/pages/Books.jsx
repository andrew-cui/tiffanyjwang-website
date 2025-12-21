import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'
import { NavBar } from '@components/NavBar'
import { NavIcons } from '@components/NavIcons'
import { Library } from '@pages/Library'
import { Book } from '@components/Book'

import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer, Inline_Spacer, Goodreads_Button } from '@components/ButtonsSpacers'
import '@css/App.css'
import '@css/books.css'
import '@css/library.css'
import '@css/home.css'
import books from '@content/books.tsx'

function Books () {
    const [scrolled, setScrolled] = useState(false);
    const threshold = 400;
    const width = "100%";
    const [activeBook, setActiveBook] = useState(null);

    useEffect(() => {
        if (!activeBook) return; console.log(activeBook)
        
        const el = document.getElementById(activeBook.html_id)
        if(!el) return; 
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - 200,
            behavior: 'smooth',
        })

            // Function to detect scroll end
        let timeout;
        const handleScroll = () => {
        setScrolled(window.scrollY > threshold);

        // Clear previous timeout
        clearTimeout(timeout);

        // Set a timeout to detect "scroll end" after 100ms of no scrolling
        timeout = setTimeout(() => {
            console.log("Scroll ended at scrollY:", window.scrollY);
        }, 50);
        };

        window.addEventListener("scroll", handleScroll);

        // Initialize scrolled state immediately
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, [activeBook])

    // const libraryRef = useRef(null);

    // const scrollRight = () => {
    //     console.log(libraryRef.current?.scrollWidth);
    //     console.log(libraryRef.current?.clientWidth);
    //     libraryRef.current?.scrollBy({
    //     left: 300,
    //     behavior: "smooth",
    //     });
    // };

    // const scrollLeft = () => {
    //     libraryRef.current?.scrollBy({
    //     left: -300,
    //     behavior: "smooth",
    //     });
    // };


    return (
        <>
        <NavBar currentPage={'books'}/>
        <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 1 }}
        ><div className="app-container">
            <h1 className="page-title">Books</h1>

            <AnimatePresence>
                {scrolled && (
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.2 }}>
                    <div className="library-book-selector">
                        <button 
                            onClick={() => {
                            setActiveBook(null);
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                            setScrolled(false);
                        }}
                        >top</button>
                        {books.map((book, index) => (
                            <button 
                                key={index} 
                                onClick={() => {
                                setActiveBook(null);
                                setActiveBook(book);
                                console.log(activeBook)}}
                            >{book.title}&nbsp;&nbsp;{book.emoji}</button>
                        ))}
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            <div>
            {/* <button onClick={scrollLeft}>←</button> */}
                <Library 
                // className="library-wrapper" ref={libraryRef}
                    homepage={false}
                    onSelectBook={setActiveBook}
                    activeBook={activeBook}
                    overlay={false} width={width} />
            {/* <button onClick={scrollRight}>→</button> */}
            </div>
            <LG_Spacer/>
            <hr></hr>

            {/* <hr></hr> */}
            {books.map((book, index) => (
                <Book
                    key={index}
                    bookData={book}
                />
            ))}
        </div>
        </motion.div></AnimatePresence>
        <NavIcons/>
        </>
    )
}

export default Books;
