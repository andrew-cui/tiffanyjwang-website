import {
  Link
} from 'react-router-dom'
import '@css/shared.css'      

type HyperlinkProps = {
    title?: string;
    href?: string;
    classes?: string;
    disabled?: boolean;    
    inline?: boolean // true = show 
    sitePage?: boolean // true = don't redirect 
    arrow?: boolean
};

export function Hyperlink ({ 
        title = '', 
        href = '/', 
        classes = '', 
        disabled = false, 
        inline = false,
        sitePage = false,
        arrow = false
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
                {arrow && <i className="bi bi-chevron-double-right"></i>}
            </h3>
        </Link>
        </>
    )
}