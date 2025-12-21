
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

    // console.log(bookData);

    return (
        <div id={bookData.html_id}
            className={`book`}>
                <div className='book-cover'>
                    <img src={bookData.img_src}></img>
                    <p>{bookData.img_caption || null}</p>
                    <a href={bookData.href_goodreads} target="_blank"><button className=''>
                        add to goodreads
                    </button></a>
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
                    {bookData.blurbs.map((blurb, index) => (
                        <div key={index} className='book-blurb'>
                            <p className='blurb-content'>“{blurb.content}”</p>
                            <p className='blurb-name'>— {blurb.name}, <span className='blurb-bio'>{blurb.bio}</span></p>
                        </div>
                    ))}
                    <SM_Spacer/>
                    <h4>Read the Book</h4>
                    {bookData.href_purchase.map((link, index) => (
                        <a href={link.href} target="_blank"><button key={index} className=''>
                            {link.site}
                        </button></a>
                    ))}
                    <SM_Spacer/>
                    <h4>Listen to the Audiobook</h4>
                    {bookData.href_audio.map((link, index) => (
                        <a href={link.href} target="_blank"><button key={index} className=''>
                            {link.site}
                        </button></a>
                    ))}
                </div>
        </div>
    )
}