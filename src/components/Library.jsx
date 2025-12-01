import books from './books.json'
import './../css/library.css'
import { motion, AnimatePresence } from 'framer-motion';

export function Library ({
        homepage = false, 
        clickable = true,
        onSelectBook,
        activeBook = null,
        overlay = false, width = '100%', header = null}) { 
    return (
        <div className="library-container" style={{width:width}}>
            {header}
            <div className={`library ${homepage ? 'library-homepage' : ''}`}>
                {books.map((book, index) => {
                    // If we have a selectable menu, then use the option to toggle the parent. Otherwise, external link
                    const isClickable = clickable;
                    //  && !book.comingsoon;
                    const handleClick = (e) => {
                        if (!homepage && clickable && onSelectBook) {
                            e.preventDefault();
                            onSelectBook(book);
                            console.log(book.title);
                        }
                    }

                    return (
                        <div key={index} className={`${book.comingsoon ? (homepage ? 'book-hidden' : 'book-unreleased') : 'book'}`}>
                            <h5>{book.release}</h5>
                            {/* {!homepage && <hr/>} */}
                                {overlay ? (
                                    <div className={`book-wrapper`}>
                                        <a href={isClickable ? book.link_bn : undefined}
                                            target={isClickable ? "_blank" : undefined}
                                            onClick={handleClick}>
                                            <AnimatePresence>
                                            {!activeBook && 
                                            <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 4, filter: "blur(5px)"}}
                                            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                                            exit={{ opacity: 0, y: 4, filter: "blur(5px)" }}
                                            transition={{ duration: 0.5,
                                                ease: [0.4, 0, 0.2, 1] }}
                                            ><img src={book.src} className={`book-img-overlay`}></img></motion.div>}
                                            </AnimatePresence>
                                            {!homepage && <div className={`book-overlay ` + book.className}>
                                                <h4 className={`${(activeBook != null && activeBook.title === book.title) ? 'book-selected': ''}`}>{book.title}</h4>
                                                <p>{book.emoji}</p>
                                            </div>}
                                        </a>
                                    </div>
                                ) : (
                                    <div className={`book-wrapper`}>
                                        <a href={isClickable ? book.link_bn : undefined}
                                            target={isClickable ? "_blank" : undefined}
                                            onClick={handleClick}>
                                            <AnimatePresence>
                                            {!activeBook && 
                                            <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 4, filter: "blur(5px)"}}
                                            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                                            exit={{ opacity: 0, y: 4, filter: "blur(5px)" }}
                                            transition={{ duration: 0.5,
                                                ease: [0.4, 0, 0.2, 1] }}
                                            ><img src={book.src} className={`book-img-caption`}></img></motion.div>}
                                            </AnimatePresence>
                                            
                                        {!homepage && <div className={`book-caption`}>
                                            <h4 className={`book-title ${(activeBook != null && activeBook.title === book.title) ? 'book-selected': ''}`}>{book.title}</h4>
                                            <p>{book.emoji}</p>
                                        </div>}
                                        </a>
                                    </div>
                                )}           
                        </div>
                    )
                })}
            </div>
        </div>
    )
}