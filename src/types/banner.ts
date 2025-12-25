import { ReactNode } from 'react'

type BannerLink = { name: string, href: string, external?: boolean }

export type BannerProps = {
    title: string;
    subtitle?: string;
    content: ReactNode | string;
    links?: BannerLink[];
    imgSrc?: string;
    variant?: string;                   // custom CSS styling
};