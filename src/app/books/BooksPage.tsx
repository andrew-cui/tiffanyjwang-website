import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { BookCollection } from '@app/books/BookCollection'
import { BookCard } from '@app/books/BookCard'
import { BookNav } from '@app/books/BookNavigation'
import { AnimatePageLoad } from '@components/layout/animations/AnimatePageLoad'
import { useBookAutoScroll } from './hooks/useBookAutoScroll';
import { useBookScrollSpy } from './hooks/useBookScrollSpy';
import type { BookProps } from "@/types/book";
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer, Inline_Spacer } from '@components/layout/Spacers'
import '@styles/global.css'
import '@styles/books.css'
import '@styles/home.css'
import books from '@data/bookData'

export default function BooksPage () {
    const autoScrollDuration = 300;
    const [activeBook, setActiveBook] = useState<BookProps | null>(null);
    const [autoScroll, setAutoScroll] = useState(false);
    const bookRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useBookAutoScroll({
        books, bookRefs,
        offset: 115,
        setActiveBook, setAutoScroll
    });

    const { scrolled } = useBookScrollSpy({
        books, bookRefs,
        offset: 115,
        threshold: 400,
        autoScroll, activeBook, setActiveBook
    });

    const handleBookClick = (book: BookProps) => {
        const el = bookRefs.current[book.html_id];
        if (!el) return;
        setAutoScroll(true);
        setActiveBook(book);
        window.scrollTo({
            top: el.offsetTop - 115,
            behavior: 'smooth',
        });
        setTimeout(() => setAutoScroll(false), autoScrollDuration);
    }


    return (
        <>
        <AnimatePageLoad ReactDOMElement={
            <div className="app_container">
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
                <BookCollection 
                    bookData={books.filter(book => book.nav)}
                    handleBookClick={handleBookClick}
                    activeBook={activeBook}/>
                {/* <button onClick={scrollRight}>→</button> */}
                <div className="library-dots">
                    <i className="bi bi-three-dots"/>
                </div>
                </div>
                <MD_Spacer/>

                {books.map((book, _) => (
                    <BookCard
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