import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react'
import { NavBar } from '@components/NavBar'
import { NavIcons } from '@components/NavIcons'
import { Library } from '@components/Library'

import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer, Inline_Spacer, Goodreads_Button } from '@components/ButtonsSpacers'
import '@css/App.css'
import '@css/books.css'
import '@css/home.css'

function Books () {
    const width = "90%";
    const [activeBook, setActiveBook] = useState(null);

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
            <Library 
                homepage={false}
                onSelectBook={setActiveBook}
                activeBook={activeBook}
                overlay={false} width={width} />

            {activeBook && (
                <div className="home-container" style={{width:width}}>hi
                <div>{activeBook.title}</div>
                {/* <img src={book.src} className={`book-img-caption`}></img> */}
                </div>
            )}

            {/* <div className="book-selector"> */}
                {/* <button className={`selector ${isIHVisible ? 'active-book' : ''}`} id="infernosheir" onClick={() => {setIHVisible(true)}}>
                    <h3 id="infernosheir">book 1</h3>
                </button>
                <div className="vertical_dotted_line"></div>
                <button className={`selector ${isIHVisible ? '' : 'active-book'}`} id="tempestsqueen" onClick={() => {setIHVisible(false)}}>
                    <h3 id="tempestsqueen">book 2</h3>
                </button> */}
            {/* </div> */}
            {/* <div className="flex-container book-container"> */}
                {/* {isIHVisible ? <InfernosHeir id="ih-book"/> : <TempestsQueen id="tq-book"/>} */}
                {/* <AnimatePresence mode="wait"> */}
                    {/* {isIHVisible ? (
                    <motion.div
                        key="ih-book"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <InfernosHeir id="ih-book" />
                    </motion.div>
                    ) : (
                    <motion.div
                        key="tq-book"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TempestsQueen id="tq-book" />
                    </motion.div>
                    )}
                </AnimatePresence> */}
            {/* </div> */}
        </div>
        </motion.div></AnimatePresence>
        <NavIcons/>
        </>
    )
}

export default Books;
