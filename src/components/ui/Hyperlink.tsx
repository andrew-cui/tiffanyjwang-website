
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import css from '@styles/components/hyperlink.module.css'      
import variantcss from '@styles/app/variants.module.css'
import type { HyperlinkProps } from '@/types/hyperlink'

export function Hyperlink ({
    text = '',
    href = '',
    classes,
    variant,
    active = false,         // false = do not color
    external = false,        // false = remains on-site, true = redirects in new tab
    disabled = false,       // true = not clickable
    inline = false,         // true = able to be shown on the same line
    underline = true,       // true = includes underline animation
    arrow = false,          // true = includes arrow to the right
    onClick
}: HyperlinkProps) {

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
        {inline && ' '}
        <Link to={href} 
            style={{pointerEvents: disabled ? 'none' : 'auto'}} 
            className={clsx(
                css.hyperlink,
                {[css.hyperlink_active]: active},
                {[css.hyperlink_no_underline]: !underline},
                variant && variantcss[`hyperlink_${variant}`],
                classes)} 
            target={external && '_blank'}
            rel={external && 'noopener noreferrer'}
            onClick={handleClick}>
            <h3 className={clsx(
                css.hyperlink_text,
                {[css.hyperlink_disabled]: disabled},
                {[css.hyperlink_active]: active},
                {[css.hyperlink_inline]: inline},
                variant && variantcss[`hyperlink_${variant}`],
                classes)}>
                {text}
                {arrow && <i className="bi bi-chevron-double-right"></i>}
            </h3>
        </Link>
        </>
    )
}