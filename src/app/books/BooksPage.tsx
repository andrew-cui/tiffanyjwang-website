import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// components
import { AnimatePageLoad } from '@components/layout/animations/AnimatePageLoad'
import {
    BookCard, BookCollection, BookNav,
    useBookAutoScroll, useBookScrollSpy
} from '@app/books'
import Spacer from '@components/layout/Spacer'

// styles and modules
import css from '@styles/app/books/books.module.css'
import type { BookProps } from "@/types/book";
import bookData from '@data/bookData'


export default function BooksPage () {
    const offset = 115;
    const threshold = 400;
    const autoScrollDuration = 300;
    const [activeBook, setActiveBook] = useState<BookProps | null>(null);
    const [autoScroll, setAutoScroll] = useState(false);
    const bookRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // function imports
    useBookAutoScroll({ 
        bookData, bookRefs, 
        offset: offset, 
        setActiveBook, setAutoScroll
    })
    const { scrolled } = useBookScrollSpy({ 
        bookData, bookRefs, 
        offset: offset, threshold: threshold, 
        autoScroll, activeBook, setActiveBook
    })
    const handleBookClick = (book: BookProps) => {
        const el = bookRefs.current[book.html_id];
        if (!el) return;
        setAutoScroll(true);
        setActiveBook(book);
        window.scrollTo({
            top: el.offsetTop - offset,
            behavior: 'smooth',
        });
        setTimeout(() => setAutoScroll(false), autoScrollDuration);
    }


    return (
        <>
        <AnimatePageLoad ReactDOMElement={
            <div className={'app_container'}>
                <h1 className={'page_title'}>Books</h1>
                {scrolled && (
                    <AnimatePresence><motion.div initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 0 }} transition={{ duration: 0.2 }}>
                        <BookNav
                            bookData={bookData.filter(book => book.nav)}
                            handleBookClick={handleBookClick}
                            activeBook={activeBook}
                        />
                    </motion.div></AnimatePresence>
                )}
                <div>
                    {/* <button onClick={scrollLeft}>←</button> */}
                    <BookCollection 
                        bookData={bookData.filter(book => book.nav)}
                        handleBookClick={handleBookClick}
                        activeBook={activeBook}/>
                    {/* <button onClick={scrollRight}>→</button> */}
                    <div className={css.bookPage__dots}>
                        <i className="bi bi-three-dots"/>
                    </div>
                </div>
                <Spacer size={"m"}/>

                {bookData.map((book, _) => (
                    <BookCard
                        key={book.html_id}
                        bookData={book}
                        ref={(el: HTMLDivElement | null) => {bookRefs.current[book.html_id] = el}}
                    />
                ))}
                <Spacer size={"l"}/>
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