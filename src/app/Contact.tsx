import clsx from 'clsx'
import { Banner } from '@components/ui/Banner'
import { Hyperlink } from '@components/ui/Hyperlink'
import { EmailForm } from '@components/ui/EmailForm'
import { IconButton } from '@components/ui/IconButton'
import { AnimatePageLoad } from '@components/layout/animations/AnimatePageLoad'
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer } from '@components/layout/Spacers'
import css from '@styles/app/contact.module.css'
import socials from '@data/socialsData'


export default function ContactPage () {
    return (
        <>
        <AnimatePageLoad ReactDOMElement={
            <div className={clsx('app_container')} id="contact">
                <div className={css.contact_container}>
                    <div className={css.contact_section} id="contact_agents">
                        <h3 className={css.contact_title}>professional inquiries</h3>
                        <MD_Spacer></MD_Spacer>
                        <div className={css.contact_details}>
                            <div className={css.contact_card}>
                                <Banner 
                                    title = {'Kelly Van Sant'}
                                    content = {(
                                        <span className={css.contact_card_text}><p>Literary agent, </p>
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
                            <div className={css.contact_card}>
                                <Banner 
                                    title= {'Maria Napolitano'}
                                    content= {(
                                        <p className={css.contact_card_text}>Foreign rights and translation inquiries </p>
                                    )}
                                    variant = {'contact'}
                                    links = {[{ "name": "maria@ktliterary.com",  "href": "mailto:maria@ktliterary.com?subject=Tiffany%20Wang%20-%20Foreign%20/%20Translation%20Rights%20"  }]}
                                />
                            </div>
                            <div className={css.contact_card}>
                                <Banner 
                                    title = {'Mary Pender'}
                                    content = {(
                                        <p className={css.contact_card_text}>Film rights</p>
                                    )}
                                    variant = {'contact'}
                                    // links = {[{ "name": "maria@ktliterary.com",  "href": "mailto:maria@ktliterary.com?subject=Tiffany%20Wang%20-%20Foreign%20/%20Translation%20Rights%20"  }]}
                                />
                            </div>
                        </div>
                        </div>
                        <LG_Spacer/>
                    <div className={css.contact_section} id="contact_socials">
                        <h3 className={css.contact_title}>social media</h3>
                        {/* <p className={css.contact_socials_title}>I'm active at the social media links here. You can also send an email from the form below!</p> */}
                        <div className={css.contact_socials}>
                            {socials.map((item, index) => (
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

                    <LG_Spacer/>
                    <div className={css.contact_section} id="contact_form">
                        <h3 className={css.contact_title}>get in touch</h3>
                        <MD_Spacer/>
                        <EmailForm />
                    </div>
                </div>
            </div>
        }/>
        </>
    )
}
