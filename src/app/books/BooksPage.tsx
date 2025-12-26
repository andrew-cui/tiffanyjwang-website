/* Books 
 * /books page to display all books and details
 */

// packages 
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// components, styles & data
import { Spacer, AnimateFadeIn } from '@components'
import { BookCard, BookCollection, BookNav, useBookAutoScroll, useBookScrollSpy } from '@app/books'
import css from '@styles/app/books/books.module.css'
import bookData from '@data/bookData'

// interfaces
import type { BookProps } from "@/types/book";

// render
export default function BooksPage () {
    const offset = 115;
    const threshold = 400;
    const autoScrollDuration = 400;
    const [activeBook, setActiveBook] = useState<BookProps | null>(null);
    const [autoScroll, setAutoScroll] = useState(false);
    const bookRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // function imports
    useBookAutoScroll({ 
        bookData, bookRefs, 
        offset: offset, 
        setActiveBook, setAutoScroll, autoScrollDuration: autoScrollDuration
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
        window.scrollTo({
            top: el.offsetTop - offset,
            behavior: 'smooth',
        });
        setTimeout(() => setAutoScroll(false), autoScrollDuration);
    }


    return (
        <>
        <AnimateFadeIn ReactDOMElement={
            <div className={'app_container'}>
                <h1 className={'page_title'}>Books</h1>
                {scrolled && (
                    <AnimatePresence><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
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