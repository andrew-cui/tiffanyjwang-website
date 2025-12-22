import type { ReactNode } from "react";

export type BookBlurb = { content: string, name?: ReactNode | string, bio?: ReactNode | string }

export type BookLink = { href: string, site: ReactNode | string, logo?: ReactNode, type: "read" | "audio"; }

export type BookData = {
    html_id: string;
    title: string;
    subtitle?: string;
    library_subtitle?: string;
    description?: ReactNode | string;
    comingsoon: boolean;
    release: string;
    img_src: string;
    img_caption?: string;
    blurbs?: BookBlurb[];
    href_goodreads?: string;
    purchaseLinks?: BookLink[];
};