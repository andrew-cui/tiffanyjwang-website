/* Home 
 * / page to show intro and key highlights. site landing page
 */


// packages 
// components, styles & data
import { Banner, Hyperlink, Spacer, AnimateFadeIn } from '@components'
import css from '@styles/app/home.module.css'

// render
export default function HomePage () {    
    return (
        <>
        <AnimateFadeIn ReactDOMElement={
            <div className="app_container" id="home">
                <div className={css.homePage__content} id="homePage__header">
                    <div className={css.homePage__image}>
                        <img src="/tiff/tjw-2.jpg"></img>
                        <p className={css.homePage__image_caption}>image by <a href="www.andrewcui.com" target="_blank">@andrew.cui</a> / favicon by <a href="https://www.instagram.com/katherine.li" target="_blank">@katherine.li</a></p>
                    </div>
                    <div className={css.homePage__about}>
                        <h2>
                            <span className={css.homePage__author_name}>Tiffany Wang</span>&nbsp;is an writer based in New York City and the author of the 
                            <Hyperlink
                                text = {"INFERNO'S HEIR"}
                                href = {'https://www.barnesandnoble.com/w/infernos-heir-tiffany-wang/1144758931'}
                                variant = {'homepage_about'} 
                                inline /> duology. She studied communication and international relations at the University of Pennsylvania. In her spare time, she enjoys reading a variety of books (especially in YA!), perusing her local library, and searching for the best deals at happy hour.
                                </h2>
                        <Spacer size={"xs"}/>
                        <h2>She is represented by
                            <Hyperlink
                                text = {'Kelly Van Sant of KT Literary'}
                                href = {'https://ktliterary.com/'}
                                variant = {'homepage_about'} 
                                inline />.
                        </h2>
                        
                        {/* banners */}
                        <div className={css.homePage__banners} id="homePage__banners">
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
                                    external: true
                                },
                                {
                                    "name": "Read Inferno's Heir",
                                    "href": "https://www.barnesandnoble.com/w/infernos-heir-tiffany-wang/1144758931",
                                    external: true
                                }
                            ]}
                            variant={'homePage'}
                            />
                        <Spacer size={"m"}/>
                        <Banner 
                            title = {'The Secrets We Carry'}
                            subtitle = {'Releasing in 2027'}
                            content = {(
                                <p>An immortal goddess and a boy who has vowed revenge against the gods are caught in a political plot that could scorch the mortal realm and topple the heavens, while inexplicably falling in love with each other. Written as a duology coming in 2027.</p>
                            )}
                            links = {[
                                {
                                    "name": "Publishers Weekly announcement",
                                    "href": "https://www.publishersweekly.com/pw/by-topic/childrens/childrens-book-news/article/98517-rights-report-week-of-september-1-2025.html",
                                    external: true
                                }
                            ]}
                        />
                        </div>
                    </div>
                </div>
            </div>
        }/>
        </>
    )
}