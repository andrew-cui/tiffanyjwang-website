import { useState } from 'react'
import emailjs from 'emailjs-com';
import '@css/form.css'

import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer } from '@components/ButtonsSpacers'

export function Form() {

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
            import.meta.env.EMAILJS_SERVICE_ID,            // Email service ID
            import.meta.env.EMAILJS_TEMPLATE_ID,            // Email template ID
            formData,                                   // Form data to send
            import.meta.env.EMAILJS_USER_ID             // Your EmailJS user ID
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
    <div className="contact-form-container">
        <div className={`${submit ? 'submit-confirmation-hide' : ''} contact-form-title`}>
            <h3>send me an </h3>
            <img src="/icons/email.svg" className="contact-email-icon"></img>
            <h3> here!</h3>
        </div>
        <SM_Spacer/>
        <form 
            name="emailform" 
            onSubmit={handleSubmit} 
            className={`contact-form ${submit ? 'contact-form-submitted' : ''}`}>
            
            {/* Contact form */}
            <div className="contact-form-sender">
                <div className={`${submit ? 'submit-confirmation-hide' : ''} contact-form-input`}
                    id="form-name">
                    <h4>Name</h4>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        // required
                        data-1p-ignore />
                </div>
                <div className={`${submit ? 'submit-confirmation-hide' : ''} contact-form-input`}
                    id="form-email">
                    <h4>Email</h4>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        // required
                    />
                </div>
           </div>


            {/* Subject */}
            <div className={`${submit ? 'submit-confirmation-hide' : ''} contact-form-input`}
                id="form-subject">
                <h4>Subject</h4>
                <input 
                    type="text" 
                    placeholder="Subject" 
                    id="subject"
                    name="subject"
                    value={formData.subject} 
                    onChange={handleChange}
                    data-1p-ignore
                />
            </div>

            {/* Message */}
            <div className={`${submit ? 'submit-confirmation-hide' : ''} contact-form-input`}
                id="form-subject">
                <h4>Message</h4>
                <textarea 
                    placeholder="Your message here!" 
                    id="message"
                    name="message"
                    value={formData.message} 
                    onChange={handleChange}
                    // required
                    data-1p-ignore
                />
            </div>

            <SM_Spacer/>
            {/* Submit */}
            <div className={`w-full flex`}>
                <button type="submit" 
                     className={`${submit ? 'submit-confirmation-hide' : ''} contact-form-submit`}>
                    <div className="">
                        <span>Send your message</span>
                        <img width="16" height="16" src="https://img.icons8.com/glyph-neue/64/send.png" alt="send"/>
                    </div>
                </button>
                <div className={`${submit ? 'submit-confirmation-show' : 'submit-confirmation-hide'}`}>
                    <p className="contact-form-confirm">Sent, thank you!</p>
                </div>
            </div>
        </form>
        
    </div>
    )
}


// <div className="contact-subcontainer contact-subcontainer-form">
//                         <div className={`contact-display-card`}>
//                             <form name="contact" onSubmit={handleSubmit} className={`contact-form-wrapper ${submit ? 'contact-form-submitted' : ''}`}>
//                                 <h5>Your Info</h5>
//                                 <div className="contact-form w-full flex">
//                                     <h5>Name</h5>
//                                     <input 
//                                         type="text" 
//                                         placeholder="Name" 
//                                         id="name"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         required
//                                         data-1p-ignore />
//                                 </div>
//                                 {/* Email */}
//                                 <input 
//                                     type="email" 
//                                     placeholder="Email (optional)" 
//                                     id="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />

//                                 <SM_Spacer/>
//                                 <h5>Your Note</h5>
//                                 {/* Subject */}
//                                 <input 
//                                     type="text" 
//                                     placeholder="Subject" 
//                                     id="subject"
//                                     name="subject"
//                                     value={formData.subject} 
//                                     onChange={handleChange}
//                                     data-1p-ignore
//                                 />

//                                 {/* Message */}
//                                 <textarea 
//                                     placeholder="Your message here!" 
//                                     className="contact-form-message" 
//                                     id="message"
//                                     name="message"
//                                     value={formData.message} 
//                                     onChange={handleChange}
//                                     required
//                                     data-1p-ignore
//                                 />

//                                 <SM_Spacer/>
//                                 {/* Submit */}
//                                 <div className="flex w-full">
//                                 <button type="submit" className="contact-form-submit">
//                                     <div className="">
//                                         <span>Send your message</span>
//                                         <img width="16" height="16" src="https://img.icons8.com/glyph-neue/64/send.png" alt="send"/>
//                                     </div>
//                                 </button>
//                                 </div>
//                             </form>
//                             <div className={`${submit ? 'submit-confirmation-show' : 'submit-confirmation-hide'}`}>
//                                 <i>Sent, thank you!</i>
//                             </div>
//                         </div>
//                     </div>