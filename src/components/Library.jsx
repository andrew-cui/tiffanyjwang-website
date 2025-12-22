import books from '@data/bookData'
import '@css/library.css'
import { motion, AnimatePresence } from 'framer-motion';

export function Library ({
        homepage = false, 
        clickable = true,
        onSelectBook,
        activeBook = null,
        overlay = false, width = '100%', header = null}) { 

    return (
        <div className={`library ${homepage ? 'library-homepage' : ''}`}>
            {books.map((book, index) => {
                // If we have a selectable menu, then use the option to toggle the parent. Otherwise, external link
                const isClickable = clickable;
                //  && !book.comingsoon;
                const handleClick = (e) => {
                    if (!homepage && clickable && onSelectBook) {
                        e.preventDefault();
                        onSelectBook(book);
                    }
                }

                return (
                    <div key={index} className={`${book.comingsoon ? (homepage ? 'library-book-hidden' : 'library-book-unreleased') : 'library-book'}`}>
                        <h5>{book.release}</h5>
                            <div className={`library-book-wrapper`}>
                                <a 
                                href={isClickable ? book.html_id : undefined}
                                    // target={isClickable ? "_blank" : undefined}
                                    onClick={handleClick}>
                                    <AnimatePresence>
                                    <motion.div
                                    initial={{ opacity: 0, y: 4, filter: "blur(5px)"}}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                                    exit={{ opacity: 0, y: 4, filter: "blur(5px)" }}
                                    transition={{ duration: 0.5,
                                        ease: [0.4, 0, 0.2, 1] }}
                                    ><img src={book.img_src} className={`library-book-img-caption`}></img></motion.div>
                                    </AnimatePresence>
                                    
                                {!homepage && <div className={`library-book-caption`}>
                                    <h4 className={`library-book-title ${(activeBook != null && activeBook.title === book.title) ? 'book-selected': ''}`}>{book.title}</h4>
                                    <p className='library-book-subtitle'>{book.library_subtitle}</p>
                                </div>}
                                </a>
                            </div>  
                    </div>
                )
            })}
        </div>
    )
}