/* Contact 
 * /contact page to include links and contact form
 */

// packages 
import clsx from 'clsx'

// components, styles & data
import { Banner, Hyperlink, EmailForm, IconButton, AnimateFadeIn, Spacer } from '@components'
import css from '@styles/app/contact.module.css'
import socialsData from '@data/socialsData'

// render
export default function ContactPage () {
    return (
        <>
        <AnimateFadeIn ReactDOMElement={
            <div className={clsx('app_container')} id="contact">
                <h1 className={'page_title'}>Contact</h1>
                <div className={css.contactPage__container}>
                    <div className={css.contactPage__section} id="contactPage__agents">
                        <h3 className={css.contactPage__title}>professional inquiries</h3>
                        <Spacer size={"s"}/>
                        <div className={css.contactPage__details}>
                            <div className={css.contactPage__card}>
                                <Banner 
                                    title = {'Kelly Van Sant'}
                                    content = {(
                                        <span className={css.contactPage__card_text}><p>Literary agent, </p>
                                            <Hyperlink
                                                text = {'KT Literary'}
                                                href = {'https://ktliterary.com/agents'}
                                                inline />
                                        </span>
                                    )}
                                    variant = {'contact'}
                                    links = {[{ "name": "kelly@ktliterary.com",  "href": "mailto:kelly@ktliterary.com"  }]}
                                />
                                </div>
                            <div className={css.contactPage__card}>
                                <Banner 
                                    title= {'Maria Napolitano'}
                                    content= {(
                                        <p className={css.contactPage__card_text}>Foreign rights and translation inquiries </p>
                                    )}
                                    variant = {'contact'}
                                    links = {[{ "name": "maria@ktliterary.com",  "href": "mailto:maria@ktliterary.com?subject=Tiffany%20Wang%20-%20Foreign%20/%20Translation%20Rights%20"  }]}
                                />
                            </div>
                            <div className={css.contactPage__card}>
                                <Banner 
                                    title = {'Mary Pender'}
                                    content = {(
                                        <p className={css.contactPage__card_text}>Film rights</p>
                                    )}
                                    variant = {'contact'}
                                    // links = {[{ "name": "maria@ktliterary.com",  "href": "mailto:maria@ktliterary.com?subject=Tiffany%20Wang%20-%20Foreign%20/%20Translation%20Rights%20"  }]}
                                />
                            </div>
                        </div>
                        </div>
                        <Spacer size={"l"}/>
                    <div className={css.contactPage__section} id="contactPage__socials">
                        <h3 className={css.contactPage__title}>social media</h3>
                        {/* <p className={css.contactPage__socials_title}>I'm active at the social media links here. You can also send an email from the form below!</p> */}
                        <div className={css.contactPage__socials}>
                            {socialsData.map((item, index) => (
                            <a key={index} href={item.href || "#"}
                                    target={`${item.label == "home" ? '' : "_blank"}`}
                                >
                                <IconButton
                                    icon={item.icon}
                                    label={item.label}
                                />
                            </a>
                            ))}
                        </div>
                    </div>

                    <Spacer size={"l"}/>
                    <div className={css.contactPage__section} id="contactPage__form">
                        <h3 className={css.contactPage__title}>get in touch</h3>
                        <Spacer size={"s"}/>
                        <EmailForm />
                    </div>
                </div>
            </div>
        }/>
        </>
    )
}
