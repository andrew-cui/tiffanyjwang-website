import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react'
import NavBar from './../components/NavBar.jsx'
import NavIcons from './../components/NavIcons.jsx'
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer, Inline_Spacer } from './../components/Spacers.jsx'
import './../css/App.css'
import './../css/books.css'
import './../css/home.css'

function Books() {

    return (
        <>
        <NavBar currentPage={'books'}/>
        <div className="app-container">
            <div className="flex-container book-container">
                <div className="book-card">
                    <div className="book-lhs">
                        <div className="book-title">
                            <h2 className="book-infernosheir" id="infernosheir">Inferno's Heir</h2>
                            {/* <div className="book-infernosheir"></div> */}
                        </div>
                        <h4 id="infernosheir">Fearing for her life, an outcast princess joins the rebellion against her own kingdom and family... but when playing with fire, someone always gets burned.</h4>
                        <p id="infernosheir">
                            Teia Carthan abandoned her morals long ago, and now there’s nothing she won’t do to stay alive. 
                            So far she has survived her parents’ deaths, the ire of the Council, and innumerable attempts on her life, orchestrated by Jura, her half brother and soon-to-be king of Erisia.
                            Teia’s rare control over two elements marks her as both an outsider and a formidable opponent—but once Jura is crowned king, there will be no way to survive him. Not for Teia, not for anyone.
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
                            <h3 id="infernosheir">Read / listen now!</h3>
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
                        <a href="https://www.goodreads.com/book/show/207014554-inferno-s-heir" target="_blank" alt="Goodreads: Inferno's Heir"><button className="button-goodreads">
                            add to <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Goodreads_logo.svg/606px-Goodreads_logo.svg.png"/></button></a>
                    </div>
                </div>
            </div>
        </div>
        <NavIcons/>
        </>
    )
    }



export default Books
