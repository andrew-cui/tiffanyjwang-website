import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'
import { NavBar } from '@components/NavBar'
import { NavIcons } from '@components/NavIcons'
import { Library } from '@components/Library'
import { Book } from '@components/Book'
import { BookNav } from '@components/BookNav'
import { AnimatePageLoad } from '@animations/AnimatePageLoad'
import type { BookData } from "@models/booktypes";
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer, Inline_Spacer, Goodreads_Button } from '@components/ButtonsSpacers'
import '@css/App.css'
import '@css/books.css'
import '@css/library.css'
import '@css/home.css'
import books from '@data/bookData'

function Books () {
    const [scrolled, setScrolled] = useState(false);
    const [activeBook, setActiveBook] = useState(null);
    const [autoScroll, setAutoScroll] = useState(false);
    const bookRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const threshold = 400;
    const offset = 115;

    const handleBookClick = (book: BookData) => {
        const el = bookRefs.current[book.html_id];
        if (!el) return;

        setAutoScroll(true);
        setActiveBook(book);  // highlight in BookNav immediately

        const scrollTarget = el.offsetTop - offset;
        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
        setTimeout(() => setAutoScroll(false), 300); 
    };

    useEffect(() => {
        const handleScrollSpy = () => {
            if (autoScroll) return; // ignore clicks in progress

            const scrollY = window.scrollY + offset;
            setScrolled(scrollY > threshold);

            // Update activeBook based on topmost book passed
            for (let i = books.length - 1; i >= 0; i--) {
                const el = bookRefs.current[books[i].html_id];
                if (!el) continue;

                if (scrollY >= el.offsetTop) {
                    if (activeBook?.html_id !== books[i].html_id) {
                        setActiveBook(books[i]);
                    }
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScrollSpy, { passive: true });
        handleScrollSpy(); // initialize
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, [autoScroll, activeBook]);
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
                            bookData={books.filter(book => book.nav)}
                            handleBookClick={handleBookClick}
                            activeBook={activeBook}
                        />
                    </motion.div></AnimatePresence>
                )}
                <div>
                {/* <button onClick={scrollLeft}>←</button> */}
                <Library 
                    bookData={books.filter(book => book.nav)}
                    homepage={false}
                    handleBookClick={handleBookClick}
                    activeBook={activeBook}
                    overlay={false} width={"100%"} />
                {/* <button onClick={scrollRight}>→</button> */}
                <div className="library-dots">
                    <i className="bi bi-three-dots"/>
                </div>
                </div>
                <MD_Spacer/>

                {books.map((book, _) => (
                    <Book
                        key={book.html_id}
                        bookData={book}
                        ref={(el: HTMLDivElement | null) => {bookRefs.current[book.html_id] = el}}
                    />
                ))}
                <LG_Spacer/>
            </div>
        }/>
        </>
    )
}

export default Books;
