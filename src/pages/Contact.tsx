import { motion, AnimatePresence } from 'framer-motion';

import { NavBar } from '@components/NavBar'
import { NavIcons } from '@components/NavIcons'
import { Banner } from '@components/Banner'
import { Hyperlink } from '@components/Hyperlink'
import { Form } from '@components/Form'
import { AnimatePageLoad } from '@animations/AnimatePageLoad'
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer } from '@components/ButtonsSpacers'
import '@css/index.css'
import '@css/App.css'
import '@css/contact.css'
import socials from '@data/socialsData'


function Contact() {
    return (
        <>
        <AnimatePageLoad ReactDOMElement={
            <div className="app-container" id="contact">
                <h1 className="page-title">Contact</h1>
                <div className="contact-container">
                    <div className="contact-section">
                        <h3 className="contact-title">professional inquiries</h3>
                        <MD_Spacer></MD_Spacer>
                        <div className="contact-details">
                            <div className="contact-card">
                                <Banner 
                                    title = {'Kelly Van Sant'}
                                    content = {(
                                        <span className="contact-banner"><p className="inline">Literary agent, </p>
                                            <Hyperlink
                                            title = {'KT Literary'}
                                            href = {'https://ktliterary.com/agents'}
                                            inline = {true} /></span>
                                    )}
                                    links = {[{ "name": "kelly@ktliterary.com",  "href": "mailto:kelly@ktliterary.com"  }]}
                                />
                                </div>
                            <div className="contact-card">
                                <Banner 
                                    title = {'Maria Napolitano'}
                                    content = {(
                                        <p className="contact-banner">Foreign rights and translation inquiries </p>
                                    )}
                                    links = {[{ "name": "maria@ktliterary.com",  "href": "mailto:maria@ktliterary.com?subject=Tiffany%20Wang%20-%20Foreign%20/%20Translation%20Rights%20"  }]}
                                />
                            </div>
                            <div className="contact-card">
                                <Banner 
                                    title = {'Mary Pender'}
                                    content = {(
                                        <p className="contact-banner">Film rights</p>
                                    )}
                                    // links = {[{ "name": "maria@ktliterary.com",  "href": "mailto:maria@ktliterary.com?subject=Tiffany%20Wang%20-%20Foreign%20/%20Translation%20Rights%20"  }]}
                                />
                            </div>
                        </div>
                        <SM_Spacer/>
                        <p>I'm active at the social media links here. You can also send an email from the form below!</p>
                        <div className="contact-socials">
                            {socials.map((item, index) => (
                            <a key={index} href={item.href || "#"}
                                    target={`${item.label == "home" ? '' : "_blank"}`}
                                >
                                <div className="site-button banner">
                                    <span>{item.icon}</span>
                                <h4>{item.label}</h4>
                                </div>
                            </a>
                            ))}
                        </div>
                    </div>

                    <MD_Spacer/>
                    <div className="contact-section">
                        <h3 className="contact-title">get in touch</h3>
                        <MD_Spacer/>
                        <Form/>
                    </div>
                </div>
            </div>
        }/>
        </>
    )
    }



export default Contact
