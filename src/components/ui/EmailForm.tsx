import { useState } from 'react'
import clsx from 'clsx'
import emailjs from 'emailjs-com'
import { IconButton } from '@components/ui/IconButton'
import css from '@styles/components/form.module.css'
import { SM_Spacer } from '@components/layout/Spacers'

export function EmailForm() {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
    const [submit, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        emailjs.send(
            serviceId,              // Email service ID
            templateId,             // Email template ID
            formData,               // Form data to send
            userId                  // Your EmailJS user ID
        ).then(
            (response) => {
                console.log('Email sent successfully', response);
                alert('Email sent successfully!');
            },  (err) => {
                console.log('Email sending error', err);
                alert('Failed to send email. Please try again.');
            }
        )
        setIsSubmitted(true);
        setFormData({   name: '',  email: '',    subject: '',    message: ''    });
    }

    return (
        <div className={css.form_container}>
            <div className={clsx(
                            css.form_title,
                            submit && css.submitted_hide
                        )}>
                <h3>send me an <i className="bi bi-envelope-at"></i> here!</h3>
            </div>
            {!submit && <SM_Spacer/>}
            {/* Contact form */}
            <form 
                name="tiffanywang_contactform" 
                onSubmit={handleSubmit} 
                className={clsx(
                            css.contact_form
                        )}
                data-netlify="true">
                <div className={css.form_input_sender}>
                    <div className={clsx(
                            css.form_input,
                            submit && css.submitted_hide
                        )}
                        id="form-name">
                        <h4>Name</h4>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            data-1p-ignore />
                    </div>
                    <div className={clsx(
                            css.form_input,
                            submit && css.submitted_hide
                        )}
                        id="form-email">
                        <h4>Email</h4>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Subject */}
                <div className={clsx(
                        css.form_input,
                        submit && css.submitted_hide
                    )}
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
                <div className={clsx(
                        css.form_input,
                        submit && css.submitted_hide
                    )}
                    id="form-message">
                    <h4>Message</h4>
                    <textarea 
                        placeholder="Message" 
                        id="message"
                        name="message"
                        value={formData.message} 
                        onChange={handleChange}
                        required
                        data-1p-ignore
                    />
                </div>

                <SM_Spacer/>

                {/* Submit */}
                <div className={css.form_submit}>
                    {!submit &&     
                    <IconButton
                        icon={<i className="bi bi-envelope-check"></i>}
                        label={'send message'}
                        iconAfterText
                        variant={'icon_button_form_cta'}
                        type={"submit"}/>        
                    }                    
                    <div className={submit ? css.submitted_show : css.submitted_hide}>
                        <p className={css.form_submit_confirmation}>Sent, thank you!</p>
                    </div>
                </div>
            </form>
        </div>
    )
}