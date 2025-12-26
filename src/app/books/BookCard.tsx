/* BookCard 
 * ui display for each item on /books
 */

// packages 
import clsx from 'clsx'
import { forwardRef } from 'react'

// components, styles & data
import { Spacer, IconButton } from '@components'
import css from '@styles/app/books/bookCard.module.css'

// interfaces
import type { BookProps } from '@/types/book'
type BookCardProps = {  bookData: BookProps;  };

// render
export const BookCard = forwardRef<HTMLDivElement, BookCardProps>(({ bookData }, ref) => {
    const bookLinks = bookData.purchaseLinks.filter(l => l.type === "read");
    const audioLinks = bookData.purchaseLinks.filter(l => l.type === "audio");

    return (
        <div ref={ref} id={bookData.html_id}
            className={clsx(css.book)}>
                <div className={clsx(css.book__image)}>
                    <img src={bookData.img_src}></img>
                    <p>{bookData.img_caption || null}</p>
                    {bookData.href_goodreads != '' && (<a href={bookData.href_goodreads} target="_blank" id="goodreads">
                        <IconButton
                        icon={<i className="bi bi-bookmark-heart"></i>}
                        label={'add to goodreads'}
                        variant={'iconButton--book_links'}/>
                    </a>)}
                </div>
                <div className={clsx(css.book__content)}>
                    <h2 className={css.book__title}>
                        {bookData.title}
                    </h2>
                    <h3 className={css.book__subtitle}>
                        {bookData.subtitle}
                    </h3>
                    <div className={css.book__description}>
                        {bookData.description}
                    </div>
                    {bookData.blurbs.length > 0 && <Spacer size={"xs"}/>}
                    {bookData.blurbs.map((blurb, index) => (
                        <div key={index} className={clsx(css.book__blurb)}>
                            <p className={clsx(css.book__blurb_content)}>“{blurb.content}”</p>
                            <p className={clsx(css.book__blurb_name)}>{blurb.name}<span className={clsx(css['book__blurb_bio'])}>, {blurb.bio}</span></p>
                        </div>
                    ))}
                    {bookData.blurbs.length > 0 ? <Spacer size={"s"}/> : <Spacer size={"xs"}/>}
                    {bookLinks.length > 0 && (
                        <>
                        <h4 className={clsx(css.book__links_title)}><i className="bi bi-book"></i>Read the Book</h4>
                        <div className={clsx(css.book__links)}>{bookLinks.map((link, index) => (
                            <a href={link.href} target="_blank" key={index}>
                                <IconButton
                                icon={link.icon}
                                label={link.site}
                                variant={'iconButton--book_links'}/>
                            </a>
                        ))}
                        </div>
                        <Spacer size={"s"}/>
                        </>
                    )}
                    {audioLinks.length > 0 && (
                        <>
                        <h4 className={clsx(css.book__links_title)}><i className="bi bi-headphones"></i>Listen to the Audiobook</h4>
                        <div className={clsx(css.book__links)}>
                        {audioLinks.map((link, index) => (
                            <a href={link.href} target="_blank" key={index}>
                                <IconButton
                                icon={link.icon}
                                label={link.site}
                                variant={'iconButton--book_links'}/>
                            </a>
                        ))}
                        </div>
                        </>
                    )}
                </div>
        </div>
    )
})