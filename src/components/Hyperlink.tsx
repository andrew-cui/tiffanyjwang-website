import {
  Link
} from 'react-router-dom'
import '@css/shared.css'      
import pages from '@content/pages.json'

type HyperlinkProps = {
    title?: string;
    href?: string;
    disabled?: boolean;
    classes?: string;
    inline?: boolean // true = show 
    sitePage?: boolean // true = don't redirect 
};

export function Hyperlink ({ 
        title = '', 
        href = '/', 
        classes = '', 
        disabled = false, 
        inline = false,
        sitePage = false 
    } : HyperlinkProps) {

    return (
        <>
        {inline ? ' ' : ''}
        <Link to={href} 
            style={{pointerEvents: disabled ? 'none' : 'auto'}} 
            className={`hyperlink ${disabled ? 'link-disabled' : ''} ${classes}`} 
            target={`${sitePage ? '' : '_blank'}`}
            rel={`${sitePage ? '' : 'noopener noreferrer'}`}>
            <h3 className={`hyperlink-text ${classes} ${inline ? 'hyperlink-text-inline' : ''}`}>
                {title}
            </h3>
        </Link>
        </>
    )
}