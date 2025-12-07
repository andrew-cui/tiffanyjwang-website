import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react'
import { NavBar } from '@components/NavBar'
import { NavIcons } from '@components/NavIcons'
import { Banner } from '@components/Banner'
import { Hyperlink } from '@components/Hyperlink'
import { Library } from '@components/Library'
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer } from '@components/ButtonsSpacers'
import '@css/App.css'
import '@css/home.css'



function Home() {
    return (
        <>
        <NavBar currentPage={'home'}/>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 1 }}
            >
            <div className="app-container">
                <div className="home-container flex-container">
                    <div className="home-hero-image">
                        {/* https://images.squarespace-cdn.com/content/v1/65d50069b811380a895ef714/6c2ad843-a03e-4474-83a4-4a0cdcef2705/2024-TJW-Author-3.jpg?format=2500w */}
                        <img src="/tjw-2.jpg"></img>
                        <p className="home-caption-text">image by <a href="www.andrewcui.com" target="_blank">@andrew.cui</a>, 2025 / favicon by <a href="https://www.instagram.com/katherine.li" target="_blank">@katherine.li</a></p>
                    </div>
                    <div className="home-hero-text">
                        <h2>
                            <span className="nav-title-name">Tiffany Wang</span>& is an writer based in New York City and the author of the 
                            <Hyperlink
                                title = {"INFERNO'S HEIR"}
                                href = {'https://www.barnesandnoble.com/w/infernos-heir-tiffany-wang/1144758931'}
                                classes = {'home-link'} 
                                inline = {true}/> duology. She studied communication and international relations at the University of Pennsylvania. In her spare time, she enjoys reading a variety of books (especially in YA!), perusing her local library, and searching for the best deals at happy hour.
                                </h2>
                        <h2>She is represented by<Hyperlink
                                title = {'Kelly Van Sant of KT Literary'}
                                href = {'https://ktliterary.com/'}
                                classes = {'home-link'} 
                                inline = {true}/>.</h2>
                        <h2>Coming in 2027: <u><a href="https://www.publishersweekly.com/pw/by-topic/childrens/childrens-book-news/article/98517-rights-report-week-of-september-1-2025.html" target="_blank"><i>The Secrets We Carry Duology</i></a></u></h2>
                        <MD_Spacer/>
                        <Banner/>
                        {/* <Library homepage={true}
                            onSelectBook={null}
                            overlay={false} width={"100%"}
                            header={
                                <div className="library-header"><h2><a href="/books">Published Books 📖</a></h2><hr></hr></div>
                            }/> */}
                    </div>
                </div>
            </div>
            </motion.div>
        </AnimatePresence>
        <NavIcons/>
        </>
    )
    }



export default Home
