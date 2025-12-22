import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'
import { NavBar } from '@components/NavBar'
import { NavIcons } from '@components/NavIcons'
import { Library } from '@components/Library'
import { Book } from '@components/Book'
import { BookNav } from '@components/BookNav'
import { AnimatePageLoad } from '@animations/AnimatePageLoad'

import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer, Inline_Spacer, Goodreads_Button } from '@components/ButtonsSpacers'
import '@css/App.css'
import '@css/books.css'
import '@css/library.css'
import '@css/home.css'
import books from '@data/bookData'

function Books () {

    const [newLoad, setNewLoad] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [activeBook, setActiveBook] = useState(null);
    // books[0]
    // Need to figure out dynamically changing it
    // Need to figure out default
    const width = "100%";

    // Scroll handling for min pixels / scroll time
    let timeout;
    const threshold = 400;
    const handleScroll = () => {
        setScrolled(window.scrollY > threshold);
        clearTimeout(timeout); // Clear previous timeout

        timeout = setTimeout(() => {
            console.log("Scroll ended at scrollY:", window.scrollY);
            console.log(window.scrollY)
        }, 50); // Minimum time for new scroll
    }

    useEffect(() => {
        if (activeBook) {
            console.log(activeBook)
            const el = document.getElementById(activeBook.html_id)
            if(el) {
                window.scrollTo({
                    top: (el.getBoundingClientRect().top + window.scrollY) - 115,
                    behavior: 'smooth',
                })
            }
        }

        // If user scrolls, update events
        window.addEventListener("scroll", handleScroll);
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
        <AnimatePageLoad ReactDOMElement={
            <div className="app-container">
                <h1 className="page-title">Books</h1>
                {scrolled && (
                    <AnimatePresence><motion.div initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 0 }} transition={{ duration: 0.2 }}>
                        <BookNav
                            bookData={books}
                            setActiveBook={setActiveBook}
                            setScrolled={setScrolled}
                            activeBook={activeBook}
                        />
                    </motion.div></AnimatePresence>
                )}
                <div>
                {/* <button onClick={scrollLeft}>←</button> */}
                    <Library 
                        homepage={false}
                        onSelectBook={setActiveBook}
                        activeBook={activeBook}
                        overlay={false} width={width} />
                {/* <button onClick={scrollRight}>→</button> */}
                <div className="library-dots">
                    <i className="bi bi-three-dots"/>
                </div>
                </div>
                <MD_Spacer/>

                {books.map((book, index) => (
                    <Book
                        key={index}
                        bookData={book}
                    />
                ))}
            </div>
        }/>
        </>
    )
}

export default Books;
