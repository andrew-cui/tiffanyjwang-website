import { motion, AnimatePresence } from 'framer-motion';
import {
    useLocation
  } from 'react-router-dom'
import { useState } from 'react'
import {NavBar, NavIcons} from '../components/NavBar.jsx'
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer, Inline_Spacer, Goodreads_Button } from '../components/ButtonsSpacers.jsx'
import './../css/App.css'
import './../css/books.css'
import './../css/home.css'


function InfernosHeir () {
    {/* Inferno's Heir */}
    return (
        <>
            <div className="book-card" id="infernosheir">
                <div className="book-lhs">
                    <div className="book-title">
                        <h2 className="book-infernosheir" id="infernosheir">
                            <span style={{fontSize: '2rem'}}>I</span>nferno's&nbsp; 
                            <span style={{fontSize: '2rem'}}>H</span>eir
                        </h2>
                        <hr style={{margin: '0 7.5%'}}/>
                    </div>
                    <h4 id="infernosheir">Fearing for her life, an outcast princess joins the rebellion against her own kingdom and family... but when playing with fire, someone always gets burned.</h4>
                    <p id="infernosheir">
                        Teia Carthan abandoned her morals long ago, and now there&apos;s nothing she won&apos;t do to stay alive. 
                        So far she has survived her parents&apos; deaths, the ire of the Council, and innumerable attempts on her life, orchestrated by Jura, her half brother and soon-to-be king of Erisia.
                        Teia&apos;s rare control over two elements marks her as both an outsider and a formidable opponent—but once Jura is crowned king, there will be no way to survive him. Not for Teia, not for anyone.
                    </p>
                        
                    <p id="infernosheir">
                        When Jura moves to crush the rebellion that seeks to overthrow the monarchy, Teia sees one last opportunity to ensure her own safety. She can infiltrate the rebels, locate their base ... and betray them to Jura, trading their lives for her own.
                    </p>
                    <p id="infernosheir">
                        Yet when Teia meets the rebels, she gets far more than she bargained for. And when she gains not only their trust but their friendship, she begins to have doubts. 
                        Perhaps the rebels are right. Perhaps the Golden Palace <i>should</i> be torn down and the monarchy destroyed.</p> 
                    <p>But then again—what if there is another possibility? What if Teia were on the throne instead?</p>
                    <SM_Spacer/>
                    <hr></hr>
                    <span className="text-center">
                        <h3>Read & listen now!</h3>
                        <div>
                            <h5 id="infernosheir">
                                <a href="https://www.barnesandnoble.com/w/infernos-heir-tiffany-wang/1144758931">Barnes & Noble</a><Inline_Spacer/>
                                <a href="https://www.amazon.com/Infernos-Heir-Tiffany-Wang/dp/1959411772">Amazon</a><Inline_Spacer/>
                                <a href="https://binderybooks.com/books/infernos-heir/">Indiebound (Bindery Exclusive Edition)</a><Inline_Spacer/>
                                <a href="https://www.target.com/p/inferno-s-heir-by-tiffany-wang-paperback/-/A-91145965">Target</a>
                            </h5>
                            <h5 id="infernosheir">

                                <a href="https://open.spotify.com/show/3D8clfGNA4nqRpL1uAslzt">Spotify</a> <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/headphones.png" alt="headphones"/><Inline_Spacer/>
                                <a href="https://podiumentertainment.com/titles/27478/infernos-heir">Podium</a> <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/headphones.png" alt="headphones"/><Inline_Spacer/>

                                <a href="https://www.audible.com/pd/Infernos-Heir-Audiobook/B0D3JNTS33">Audible</a> <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/headphones.png" alt="headphones"/>
                            </h5>
                        </div>
                    </span>
                </div>
                <div className="book-rhs">
                    <img className="title-image" src="./Wang-InfernosHeir-6x9-CV-FT.jpg"/>
                    <SM_Spacer/>
                    <p className="home-caption-text text-center">
                    Cover by <a href="https://danfunderburgh.cargo.site/" target="_blank">Dan Funderburgh</a>
                    </p>
                    <MD_Spacer/>
                    <a href="https://www.goodreads.com/book/show/207014554-inferno-s-heir" target="_blank" alt="Goodreads: Inferno's Heir"><Goodreads_Button/></a>

                    <MD_Spacer/>
                    <span>
                    <p id="infernosheir">
                        “A mesmerizing debut fantasy.” &nbsp;&ndash;<a href="https://rebeccayarros.com/" target="_blank"><b>Rebecca Yarros</b></a>, #1 New York Times bestselling author of <i>Fourth Wing</i> and <i>Iron Flame</i>
                    </p>
                    <p id="infernosheir">
                        “A fantastical romp filled with intrigue and suspense.” &nbsp;&ndash;<a href="https://www.kirkusreviews.com/" target="_blank"><b>Kirkus Reviews</b></a>
                    </p>
                    </span>
                </div>
            </div>
        </>
    )
}

function TempestsQueen () {
    {/* Tempest's Queen */}
    return (
        <>
            <div className="book-card" id="tempestsqueen">
                <div className="book-lhs">
                    <div className="book-title">
                        <h2 className="book-tempestsqueen" id="tempestsqueen">
                            <span style={{fontSize: '2rem'}}>T</span>empest's&nbsp; 
                            <span style={{fontSize: '2rem'}}>Q</span>ueen
                        </h2>
                        <p>The sequel to INFERNO'S HEIR.</p>
                        <hr style={{margin: '0 7.5%'}}/>
                    </div>
                    <h4 id="tempestsqueen">
                        The queen has won her crown. Now, she must prove she's worthy to wear it.
                    </h4>
                    <p id="tempestsqueen">
                        Six months ago, Teia Carthan seized the throne against all odds. She sacrificed everything--her morals, her friends, even the spark of love--to hear the whisper of her new title: Highness.
                    </p>
                    <p id="tempestsqueen">
                    Now, Teia sets sail across the Dark Sea to warn her cousin, the Shaylani emperor, of a threat that could doom the Five Kingdoms: Cornelius Lehm lives, and he's planning to raise the Serkawr. 
                    </p>
                    <p id="tempestsqueen">
                    But as she begins a furious journey across Shaylan, Teia knows she needs help to defeat Lehm--even if it means working with the very rebels she betrayed to claim her crown.Trust is a fragile thing, and Teia crushed it beneath her heel. 
                    </p> 
                    <p>Can she earn the Dawnbreakers' friendship once again? Or will the consequences of her treachery win out, dragging all she's fought for like a wave to the depths?</p>
                    <SM_Spacer/>
                    <hr></hr>
                    <span className="text-center">
                        <h3>Pre-order here!</h3>
                        <div>
                            <h5 id="tempestsqueen">
                                <a href="https://www.barnesandnoble.com/w/tempests-queen-tiffany-wang/1146745369?ean=9781964721446">Barnes & Noble</a><Inline_Spacer/>
                                <a href="https://www.amazon.com/Tempests-Queen-Infernos-Heir-Duology/dp/196472144X">Amazon</a><Inline_Spacer/>
                                <a href="https://www.target.com/p/tempest-s-queen-by-tiffany-wang-paperback/-/A-94483545">Target</a><Inline_Spacer/>
                                <a href="https://www.amazon.com/Tempests-Queen-Tiffany-Wang-ebook/dp/B0DL456K5D">Kindle</a>
                            </h5>
                            <h5 id="tempestsqueen">
                                {/* <a href="https://open.spotify.com/show/3D8clfGNA4nqRpL1uAslzt">Spotify</a> <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/headphones.png" alt="headphones"/><Inline_Spacer/>
                                <a href="https://podiumentertainment.com/titles/27478/infernos-heir">Podium</a> <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/headphones.png" alt="headphones"/><Inline_Spacer/>

                                <a href="https://www.audible.com/pd/Infernos-Heir-Audiobook/B0D3JNTS33">Audible</a> <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/headphones.png" alt="headphones"/> */}
                            </h5>
                        </div>
                    </span>
                </div>
                <div className="book-rhs">
                    <img className="title-image" src="./Wang-TempestsQueen-Website-Copy.jpg"/>
                    <SM_Spacer/>
                    <p className="home-caption-text text-center">
                    Cover by <a href="https://danfunderburgh.cargo.site/" target="_blank">Dan Funderburgh</a>
                    </p>
                    <MD_Spacer/>
                    <a href="https://www.goodreads.com/book/show/222942059-tempest-s-queen" target="_blank" alt="Goodreads: Tempest's Queen"><Goodreads_Button/></a>
                </div>
            </div>
        </>
    )
}




function Books_InfernosHeir() {
    // const location = useLocation()
    // location.state === null ? true : false
    const [isIHVisible, setIHVisible] = useState(true)

    return (
        <>
        <NavBar currentPage={'books'}/>
        <div className="app-container">
            <div className="book-selector">
                <button className={`selector ${isIHVisible ? 'active-book' : ''}`} id="infernosheir" onClick={() => {setIHVisible(true)}}>
                    <h3 id="infernosheir">book 1</h3>
                </button>
                <div className="vertical_dotted_line"></div>
                <button className={`selector ${isIHVisible ? '' : 'active-book'}`} id="tempestsqueen" onClick={() => {setIHVisible(false)}}>
                    <h3 id="tempestsqueen">book 2</h3>
                </button>
            </div>
            <div className="flex-container book-container">
                {/* {isIHVisible ? <InfernosHeir id="ih-book"/> : <TempestsQueen id="tq-book"/>} */}
                <AnimatePresence mode="wait">
                    {isIHVisible ? (
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
                </AnimatePresence>
            </div>
        </div>
        <NavIcons/>
        </>
    )
}

export default Books_InfernosHeir;


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

            {activeBook && (
                <div className="home-container" style={{width:width}}>
                <div>{activeBook.title}</div>
                {/* <img src={book.src} className={`book-img-caption`}></img> */}
                </div>
            )}
