import type { ReactNode } from "react";

export type BookBlurb = { content: string, name?: ReactNode | string, bio?: ReactNode | string }

export type BookLink = { href: string, site: ReactNode | string, logo?: ReactNode, type: "read" | "audio"; }

export type BookData = {
    html_id: string;
    title: string;
    library_subtitle?: string;
    subtitle?: string;
    nav?: boolean;
    description?: ReactNode | string;
    comingsoon: boolean;
    release: string;
    img_src: string;
    img_caption?: string;
    blurbs?: BookBlurb[];
    href_goodreads?: string;
    purchaseLinks?: BookLink[];
};