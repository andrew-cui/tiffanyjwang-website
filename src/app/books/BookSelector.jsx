import '@styles/library.css'
import { motion, AnimatePresence } from 'framer-motion';
import { SM_Spacer } from '../../components/layout/Spacers';

export function Library ({
    bookData,
        homepage = false, 
        clickable = true,
        handleBookClick,
        activeBook = null}) { 

    return (
        <div className={`library ${homepage ? 'library-homepage' : ''}`}>
            {bookData.map((book, index) => {
                // If we have a selectable menu, then use the option to toggle the parent. Otherwise, external link
                const isClickable = clickable;
                //  && !book.comingsoon;
                // const handleClick = (e) => {
                //     if (!homepage && clickable && onSelectBook) {
                //         e.preventDefault();
                //         onSelectBook(book);
                //     }
                // }

                return (
                    <div key={index} className={`${book.comingsoon ? (homepage ? 'library-book-hidden' : 'library-book-unreleased') : 'library-book'}`}>
                        {/* <h5>{book.release}</h5> */}
                        <SM_Spacer/>
                            <div className={`library-book-wrapper`}>
                                <a 
                                onClick={(e) => {
                                        if (clickable && handleBookClick) {
                                            e.preventDefault();  // stop default anchor jump
                                            handleBookClick(book);   // smooth scroll + set active
                                        }}}>
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