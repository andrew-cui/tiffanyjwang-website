import type { ReactNode } from "react";

export type BookBlurb = { content: string, name: ReactNode | string, bio?: ReactNode | string }

export type BookLink = { href: string, site: string, logo?: ReactNode }

export type BookData = {
    html_id: string;
    title: string;
    subtitle?: string;
    description?: ReactNode | string;
    comingsoon: boolean;
    release: string;
    img_src: string;
    img_caption?: string;
    blurbs?: BookBlurb[];
    href_goodreads?: string;
    href_purchase?: BookLink[];
    href_audio?: BookLink[];
};