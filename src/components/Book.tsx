
import '@css/shared.css'      
import '@css/books.css'
import { Hyperlink } from '@components/Hyperlink'
import type { BookData } from "@models/booktypes";
import { SM_Spacer } from './ButtonsSpacers';

export function Book ({ 
    bookData
    } : {
        bookData: BookData
    }) {
    const bookLinks = bookData.purchaseLinks.filter(l => l.type === "read");
    const audioLinks = bookData.purchaseLinks.filter(l => l.type === "audio");

    // console.log(bookData);

    return (
        <div id={bookData.html_id}
            className={`book`}>
                <div className='book-cover'>
                    <img src={bookData.img_src}></img>
                    <p>{bookData.img_caption || null}</p>
                    {bookData.href_goodreads != '' && (<a href={bookData.href_goodreads} target="_blank" className="site-button book-button" id="goodreads">
                        <i className="bi bi-bookmark-heart"></i>add to goodreads
                    </a>)}
                </div>
                <div className='book-content'>
                    <h2 className={``}>
                        {bookData.title}
                    </h2>
                    <h3 className={``}>
                        {bookData.subtitle}
                    </h3>
                    <div className={``}>
                        {bookData.description}
                    </div>
                    <SM_Spacer/>
                    {bookData.blurbs.map((blurb, index) => (
                        <div key={index} className='book-blurb'>
                            <p className='blurb-content'>“{blurb.content}”</p>
                            <p className='blurb-name'>— {blurb.name}<span className='blurb-bio'>, {blurb.bio}</span></p>
                        </div>
                    ))}
                    {bookData.blurbs.length > 0 && <SM_Spacer/>}
                    {bookLinks.length > 0 && (
                        <>
                        <h4 className="book-button-title"><i className="bi bi-book"></i>Read the Book</h4>
                        <div className="book-button-container">{bookLinks.map((link, index) => (
                            <a href={link.href} target="_blank" key={index} className='site-button book-button'>
                                {link.site}
                            </a>
                        ))}
                        </div>
                        <SM_Spacer/>
                        </>
                    )}
                    {audioLinks.length > 0 && (
                        <>
                        <h4 className="book-button-title"><i className="bi bi-headphones"></i>Listen to the Audiobook</h4>
                        <div className="book-button-container">
                        {audioLinks.map((link, index) => (
                            <a href={link.href} target="_blank" key={index} className='site-button book-button'>
                                {link.site}
                            </a>
                        ))}
                        </div>
                        </>
                    )}
                </div>
        </div>
    )
}