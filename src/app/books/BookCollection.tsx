/* BookCollection
 * ui display for top level scroll of all books, clickable to scroll
 */

// packages 
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

// components, styles & data
import css from '@styles/app/books/bookCollection.module.css'
import variantcss from '@styles/app/variants.module.css'

// interfaces
import type { BookProps } from '@/types/book'
type BookCollectionProps = {
    bookData: BookProps[];
    handleBookClick: (book: BookProps) => void;
    activeBook: BookProps;
    clickable?: boolean
    showReleaseDate?: boolean
    variant?: string
}

// render
export default function BookCollection ({
    bookData,
    handleBookClick,
    activeBook = null,
    clickable = true,               // false to make a book not clickable
    showReleaseDate = false,        // true to show release date
    variant = ''
} : BookCollectionProps) { 
    return (
        <div className={clsx(
            css.bookCollection,
            variant && variantcss[`bookCollection--${variant}`]
        )}>
            {bookData.map((book, index) => (
                <div key={index} className={clsx(
                    css.bookCollection__book,
                    variant && variantcss[`bookCollection__book--${variant}`]
                )}>
                    <h5 className={
                        clsx(css.bookCollection__book_date)
                    }>
                        {showReleaseDate && book.release}</h5>
                    <div className={clsx(
                        css.bookCollection__book_details
                    )}>
                        <a 
                        onClick={(e) => {
                            e.preventDefault(); // stop default anchor jump
                            if (clickable && handleBookClick) {
                                handleBookClick(book);   // smooth scroll + set active
                            }}}>
                            <AnimatePresence>
                                <motion.div
                                initial={{ opacity: 0, y: 4, filter: "blur(5px)"}}
                                animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                                exit={{ opacity: 0, y: 4, filter: "blur(5px)" }}
                                transition={{ duration: 0.5,
                                    ease: [0.4, 0, 0.2, 1] }}
                                >
                                <img src={book.img_src} className={clsx(
                                    css.bookCollection__book_image,
                                    variant && variantcss[`bookCollection__book_image--${variant}`]
                                )}></img>
                                </motion.div>
                            </AnimatePresence>
                            
                            <div className={clsx(
                                css.bookCollection__book_content,
                                variant && variantcss[`bookCollection__book_content--${variant}`]
                            )}>
                                <h4 className={clsx(
                                    css.bookCollection__book_title,
                                    variant && variantcss[`bookCollection__book_title--${variant}`])}>{book.title}</h4>
                                <p className={clsx(
                                    css.bookCollection__book_subtitle)}>{book.library_subtitle}</p>
                            </div>
                        </a>
                    </div>  
                </div>
            ))}
        </div>
    )
}