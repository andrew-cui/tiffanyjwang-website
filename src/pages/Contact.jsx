import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react'
import {NavBar, NavIcons} from '../components/NavBar.jsx'
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer } from '../components/ButtonsSpacers.jsx'
import './../css/index.css'
import './../css/App.css'
import './../css/contact.css'
import emailjs from 'emailjs-com';



function Contact() {
    const [submit, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
    };

    return (
        <>
        <div>
        <NavBar currentPage={'contact'}/>
        <div className="app-container">
            <div className="flex-container contact-container">
                <div className="contact-subcontainer">
                    <h2><b>Get in touch!</b></h2>
                    <hr></hr>
                    <h4>You can find me at any of the social media links below (although I’m increasingly inactive on Twitter / X), or by filling out the contact form on this site!</h4>
                    <h4>I am represented by <b className="contact-bold">Kelly Van Sant</b> from <a href="https://ktliterary.com/agents" target="_blank">KT Literary</a> (<a className="contact-link" href="mailto:kelly@ktliterary.com">kelly@ktliterary.com</a>).</h4>
                    <h4>For <b className="contact-bold">foreign rights and translation inquiries</b>, please contact Maria Napolitano (<a className="contact-link" href="mailto:maria@ktliterary.com?subject=Inferno's%20Heir%20-%20Foreign%20/%20Translation%20Rights%20">maria@ktliterary.com</a>).</h4>
                    <h4>For <b className="contact-bold">publicity requests</b>, please contact Matt Kaye at Bindery (<a className="contact-link" href="mailto:matt@binderybooks.com?subject=Publicity%20Requests:%20Tiffany%20Wang%20/%20Inferno's%20Heir">matt@binderybooks.com</a>).</h4>
                </div>
                <div className="contact-subcontainer contact-subcontainer-form">
                    <h2><b>Write a Message!</b></h2>
                    <div className={`contact-display-card`}>
                        <form name="contact" netlify onSubmit={handleSubmit} className={`contact-form-wrapper ${submit ? 'contact-form-submitted' : ''}`}>
                            <h5>Your Info</h5>
                            <div className="contact-form w-full flex">
                                <input 
                                    type="text" 
                                    placeholder="First Name" 
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    data-1p-ignore />
                                <input 
                                    type="text" 
                                    placeholder="Last Name"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange} 
                                    data-1p-ignore
                                />
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
        <NavIcons/>
        </div>
        
        </>
    )
    }



export default Contact
