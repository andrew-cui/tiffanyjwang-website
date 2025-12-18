import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react'
import { NavBar } from '@components/NavBar'
import { NavIcons } from '@components/NavIcons'
import { Banner } from '@components/Banner'
import { Hyperlink } from '@components/Hyperlink'
import { Library } from '@pages/Library'
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
                        <img src="/tiff/tjw-2.jpg"></img>
                        <p className="home-caption-text">image by <a href="www.andrewcui.com" target="_blank">@andrew.cui</a>, 2025 / favicon by <a href="https://www.instagram.com/katherine.li" target="_blank">@katherine.li</a></p>
                    </div>
                    <div className="home-hero-text">
                        <h2>
                            <span className="nav-title-name">Tiffany Wang</span>&nbsp;is an writer based in New York City and the author of the 
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
                        <MD_Spacer/>
                        <Banner 
                            title = {'The Secrets We Carry'}
                            subtitle = {'Releasing in 2027'}
                            content = {(
                                <p>An immortal goddess and a boy who has vowed revenge against the gods are caught in a political plot that could scorch the mortal realm and topple the heavens, while inexplicably falling in love with each other. Written as a duology coming in 2027!</p>
                            )}
                            links = {[
                                {
                                    "name": "Publishers Weekly announcement",
                                    "href": "https://www.publishersweekly.com/pw/by-topic/childrens/childrens-book-news/article/98517-rights-report-week-of-september-1-2025.html",
                                    sitePage: false
                                }
                            ]}
                        />
                        <MD_Spacer/>
                        <Banner 
                            title = {"Tempest's Queen"}
                            subtitle = {'Available now in the US & UK'}
                            content = {(
                                <p>BOOK 2: The queen has won her crown. Now, she must prove she's worthy to wear it. The sequel to <i>INFERNO'S HEIR (2024)</i></p>
                            )}
                            imgSrc = {'books/TQ-CV.jpg'}
                            links = {[
                                {
                                    "name": "Buy @ B&N US",
                                    "href": "https://www.barnesandnoble.com/w/tempests-queen-tiffany-wang/1146745369",
                                    sitePage: false
                                },
                                {
                                    "name": "Read Inferno's Heir",
                                    "href": "https://www.barnesandnoble.com/w/infernos-heir-tiffany-wang/1144758931",
                                    sitePage: false
                                }
                            ]}
                        />
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
