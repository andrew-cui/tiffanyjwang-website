import { MouseEvent, ReactNode } from 'react'
import {
  Link
} from 'react-router-dom'
import '@styles/shared.css'   
import '@styles/components/hyperlink.module.css'      

type HyperlinkProps = {
    title?: ReactNode | string;
    href?: string;
    classes?: string;
    disabled?: boolean;    
    inline?: boolean // true = show 
    sitePage?: boolean // true = don't redirect 
    arrow?: boolean
    active?: boolean
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export function Hyperlink ({ 
        title = '', 
        href = '/', 
        classes = '', 
        disabled = false, 
        inline = false,
        sitePage = false,
        arrow = false,
        active = false,
        onClick
    } : HyperlinkProps) {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled) { 
            e.preventDefault();  
            return; 
        }
        if (onClick) {
            e.preventDefault();  
            onClick(e); 
        }
  };

    return (
        <>
        {inline ? ' ' : ''}
        <Link to={href} 
            style={{pointerEvents: disabled ? 'none' : 'auto'}} 
            className={`hyperlink ${disabled ? 'link-disabled' : ''} ${active ? 'hyperlink-active' : ''} ${classes}`} 
            target={`${sitePage ? '' : '_blank'}`}
            rel={`${sitePage ? '' : 'noopener noreferrer'}`}
            onClick={handleClick}>
            <h3 className={`hyperlink-text ${active ? 'hyperlink-active' : ''} ${classes} ${inline ? 'hyperlink-text-inline' : ''}`}>
                {title}
                {arrow && <i className="bi bi-chevron-double-right"></i>}
            </h3>
        </Link>
        </>
    )
}