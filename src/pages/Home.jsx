import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react'
import {NavBar, NavIcons} from './../components/NavBar.jsx'
// import NavIcons from './../components/NavIcons.jsx'
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer } from './../components/ButtonsSpacers.jsx'
import './../css/App.css'
import './../css/home.css'

function Home() {

    return (
        <>
        <NavBar currentPage={'home'}/>
        <div className="app-container">
            <div className="flex-container home-container">
                <div className="home-hero-image">
                    {/* https://images.squarespace-cdn.com/content/v1/65d50069b811380a895ef714/6c2ad843-a03e-4474-83a4-4a0cdcef2705/2024-TJW-Author-3.jpg?format=2500w */}
                    <img src="/tjw-2.jpg"></img>
                    <p className="home-caption-text">image by <a href="www.andrewcui.com" target="_blank">Andrew Cui</a>, 2025 / favicon by <a href="https://www.instagram.com/katherine.li" target="_blank">Katherine Li</a></p>
                </div>
                <div className="home-hero-text">
                    <h2>Tiffany Wang is an writer based in New York City and the author of the <a className="link-underline" href="https://www.barnesandnoble.com/w/infernos-heir-tiffany-wang/1144758931" target="_blank">INFERNO'S HEIR</a> duology. She studied communication and international relations at the University of Pennsylvania. In her spare time, she enjoys reading a variety of books (especially in YA!), perusing her local library, and searching for the best deals at happy hour.</h2>
                
                    <h2>She is represented by <a className="link-underline" href="https://ktliterary.com/" target="_blank">Kelly Van Sant of KT Literary</a>.</h2>
                    <LG_Spacer/>
                    
                    <img className="palmares-book" src="/IH-CV.jpg"></img>
                    <img className="palmares-book" src="/TQ-CV.jpg"></img>
                    {/* 📖 */}
                </div>
            </div>
        </div>
        <NavIcons/>
        </>
    )
    }



export default Home
