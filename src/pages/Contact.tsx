import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react'
import { NavBar } from '@components/NavBar'
import { NavIcons } from '@components/NavIcons'
import { Banner } from '@components/Banner'
import { Hyperlink } from '@components/Hyperlink'
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer } from '@components/ButtonsSpacers'
import '@css/index.css'
import '@css/App.css'
import '@css/contact.css'
import emailjs from 'emailjs-com';



function Contact() {
    const [submit, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        console.log('Form submitted:', formData);

        // Send email
        emailjs.send(
            'service_v3apcdq',        // Email service ID
            'template_yrimy4a',       // Email template ID
            formData,                 // Form data to send
            'EUMkE_1mVt1Qv4HuI'            // Your EmailJS user ID
        )
        .then(
            (response) => {
            console.log('Email sent successfully', response);
            alert('Email sent successfully!');
            },
            (err) => {
            console.log('Email sending error', err);
            alert('Failed to send email. Please try again.');
            }
        );
    
        setIsSubmitted(true);
    
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
    };

    return (
        <>
        <div>
        <NavBar currentPage={'contact'}/>
        <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 1 }}
        >
        <div className="app-container" id="contact">
            <div className="contact-container">
                <div className="contact-section">
                    <h3 className="contact-title">professional inquiries</h3>

                    <div className="contact-details">
                        <div className="contact-card">
                            <Banner 
                                title = {'Kelly Van Sant'}
                                content = {(
                                    <p className="contact-banner">Literary agent, 
                                        <Hyperlink
                                        title = {'KT Literary'}
                                        href = {'https://ktliterary.com/agents'}
                                        inline = {true} /></p>
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
                                title = {'Film'}
                                content = {(
                                    <p className="contact-banner">TBD</p>
                                )}
                                // links = {[{ "name": "maria@ktliterary.com",  "href": "mailto:maria@ktliterary.com?subject=Tiffany%20Wang%20-%20Foreign%20/%20Translation%20Rights%20"  }]}
                            />
                        </div>
                    </div>
                    <p>I'm also active at the social media links, or by filling out the contact form on this site!</p>
                </div>
                <div className="contact-subcontainer contact-subcontainer-form">
                    <h2><b>Write a Message!</b></h2>
                    <div className={`contact-display-card`}>
                        <form name="contact" onSubmit={handleSubmit} className={`contact-form-wrapper ${submit ? 'contact-form-submitted' : ''}`}>
                            <h5>Your Info</h5>
                            <div className="contact-form w-full flex">
                                <input 
                                    type="text" 
                                    placeholder="Name" 
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    data-1p-ignore />
                            </div>
                            {/* Email */}
                            <input 
                                type="email" 
                                placeholder="Email (optional)" 
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <SM_Spacer/>
                            <h5>Your Note</h5>
                            {/* Subject */}
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                id="subject"
                                name="subject"
                                value={formData.subject} 
                                onChange={handleChange}
                                data-1p-ignore
                            />

                            {/* Message */}
                            <textarea 
                                placeholder="Your message here!" 
                                className="contact-form-message" 
                                id="message"
                                name="message"
                                value={formData.message} 
                                onChange={handleChange}
                                required
                                data-1p-ignore
                            />

                            <SM_Spacer/>
                            {/* Submit */}
                            <div className="flex w-full">
                            <button type="submit" className="contact-form-submit">
                                <div className="">
                                    <span>Send your message</span>
                                    <img width="16" height="16" src="https://img.icons8.com/glyph-neue/64/send.png" alt="send"/>
                                </div>
                            </button>
                            </div>
                        </form>
                        <div className={`${submit ? 'submit-confirmation-show' : 'submit-confirmation-hide'}`}>
                            <i>Sent, thank you!</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
        </AnimatePresence>
        <NavIcons/>
        </div>
        
        </>
    )
    }



export default Contact
