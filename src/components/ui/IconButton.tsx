/* IconButton 
 * ui component to show a rounded button with an optional logo used across the site
 */

// packages 
import { ReactNode } from 'react'

// render
export default function IconButton ({
    icon,
    label = '',
    iconAfterText = false, // if true, place icon second
    variant,
    type
}: {
    icon?: ReactNode;
    label: string;
    variant?: string;
    iconAfterText?: boolean;
    type?: "button" | "submit" | "reset";
}) {
    return (
        <button type={type} className={`iconButton ${variant}`}>
            {!iconAfterText && icon && <span>{icon}</span>}
            <h4>{label}</h4>
            {iconAfterText && icon && <span>{icon}</span>}
        </button>
    )
}