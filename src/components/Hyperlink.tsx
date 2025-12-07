import {
  Link
} from 'react-router-dom'
import '@css/shared.css'        

type HyperlinkProps = {
    title?: string;
    href?: string;
    disabled?: boolean;
    classes?: string;
    inline?: boolean // true = show 
};

export function Hyperlink ({ title = '', href = '', disabled = false, classes = '', inline = false } : HyperlinkProps) {
    const hyperlinkDest = (href.substring(0, 1) === '/' ? '' : '/') + href;

    return (
        <>
        {inline ? ' ' : ''}
        <Link to={hyperlinkDest} style={{pointerEvents: disabled ? 'none' : 'auto'}} className={`hyperlink ${classes}`}>
            <h3 className={`hyperlink-text ${classes} ${inline ? 'hyperlink-text-inline' : ''}`}>
                {title}
            </h3>
        </Link>
        </>
    )
}