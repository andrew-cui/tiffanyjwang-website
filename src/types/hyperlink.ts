import { MouseEvent, ReactNode } from 'react'

export type HyperlinkProps = {
    text: ReactNode | string;
    href: string;
    classes?: string;       // custom CSS classes
    variant?: string;       // custom CSS classes for context

    // functional properties
    active?: boolean        // active page = keep underline active
    external?: boolean      // true = stay on site and don't redirect into new tab

    // styles
    disabled?: boolean;     // true = don't allow clicks
    inline?: boolean        // true = show as inline
    underline?: boolean     // false = omit underline animation
    arrow?: boolean         // true = include arrow
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};