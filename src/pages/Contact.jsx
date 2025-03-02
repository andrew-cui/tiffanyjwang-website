import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react'
import NavBar from './../components/NavBar.jsx'
import NavIcons from './../components/NavIcons.jsx'
import './../css/App.css'
import './../css/contact.css'


function Contact() {

    return (
        <>
        <div>
        <NavBar currentPage={'contact'}/>
        <div className="app-container">
            <div className="contact-container flex flex-wrap">
                <div className="contact-subcontainer">
                    <h2><b>Get in touch!</b></h2>
                    <hr></hr>
                    <h4>You can find me at any of the social media links below (although I’m increasingly inactive on Twitter / X), or by filling out the contact form on this site!</h4>
                    <h4>I am represented by Kelly Van Sant from <a href="https://ktliterary.com/agents" target="_blank">KT Literary</a> (<a className="contact-link" href="mailto:kelly@ktliterary.com">kelly@ktliterary.com</a>).</h4>
                    <h4>For <b>foreign rights and translation inquiries</b>, please contact Maria Napolitano (<a className="contact-link" href="mailto:maria@ktliterary.com?subject=Inferno's%20Heir%20-%20Foreign%20/%20Translation%20Rights%20">maria@ktliterary.com</a>).</h4>
                    <h4>For <b>publicity requests</b>, please contact Matt Kaye at Bindery (<a className="contact-link" href="mailto:matt@binderybooks.com?subject=Publicity%20Requests:%20Tiffany%20Wang%20/%20Inferno's%20Heir">matt@binderybooks.com</a>).</h4>
                </div>
                <div className="contact-subcontainer contact-subcontainer-form">
                <h2><b>Contact Me</b></h2>
                <p>Form to come soon!</p>
                </div>
            </div>
        </div>
        <NavIcons/>
        </div>
        
        </>
    )
    }



export default Contact
