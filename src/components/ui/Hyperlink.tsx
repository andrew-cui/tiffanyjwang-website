/* Hyperlink 
 * ui component to have dynamic styling for hyperlinks caross navigation, links and banners
 */

// packages 
import { Link } from 'react-router-dom'
import clsx from 'clsx'

// components, styles & data
import css from '@styles/components/hyperlink.module.css'      
import variantcss from '@styles/app/variants.module.css'

// interfaces
import type { HyperlinkProps } from '@/types/hyperlink'

// render
export default function Hyperlink ({
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
        if (disabled || onClick)    { e.preventDefault();   }
        if (disabled)               { return;               }
        if (onClick)                { onClick(e);           }
    }

    return (
        <>
        {inline && ' '}
        <Link to={href} 
            style={{pointerEvents: disabled ? 'none' : 'auto'}} 
            className={clsx(
                css.hyperlink,
                disabled && variantcss['hyperlink--disabled'],
                active && variantcss['hyperlink--active'],
                !underline && variantcss['hyperlink--no_underline'],
                variant && variantcss[`hyperlink--${variant}`],
                classes)} 
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            onClick={handleClick}>
            <h3 className={clsx(
                css.hyperlink__text,
                disabled && variantcss['hyperlink--disabled'],
                active && variantcss['hyperlink--active'],
                !underline && variantcss['hyperlink--no_underline'],
                inline && variantcss['hyperlink--inline'],
                variant && variantcss[`hyperlink__text--${variant}`],
                classes)}>
                {text}
                {arrow && <i className="bi bi-chevron-double-right"></i>}
            </h3>
        </Link>
        </>
    )
}