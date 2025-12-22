import '@css/library.css'
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { Hyperlink } from '@components/Hyperlink'
import '@css/shared.css'

type BannerLink = { name: string, href: string, sitePage?: boolean }
type BannerLinks = BannerLink[] // external links

type BannerProps = {
    title?: string;
    subtitle?: string;
    content?: ReactNode | string;
    links?: BannerLinks;
    imgSrc?: string;
};

export function Banner ({ 
        title = '', 
        subtitle = '', 
        content = '', 
        links = [], 
        imgSrc = undefined
    } : BannerProps) {
    return (
        <div className="banner flex flex-row">
            {imgSrc && 
                (<div className="banner-image">
                    <img src={imgSrc}/>
                </div>)
            }
            <div className="banner-content">
                <h4 className="banner-subtitle">{subtitle}</h4>
                <h3 className="banner-title">{title}</h3>
                <div className="banner-body">{content}</div>
                {links.map((item, index) => (
                    <Hyperlink 
                    key={index}
                    title = {item.name}
                    classes = {'banner-link'}
                    disabled = {false}
                    inline = {true}
                    arrow = {true}
                    href = {item.href}
                    sitePage = {item.sitePage ?? false}
                    />
                ))}
            </div>
        </div>
    )
}