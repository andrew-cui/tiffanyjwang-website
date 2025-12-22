import type { ReactNode } from "react";

type News = {
    index: Number,
    href: string,
    title?: string,
    publisher?: string,
    author?: string,
    type?: string,
    date?: Date,
    imagesrc?: string,
    icon?: ReactNode;
};

const newsfeed: News[] = [
    // Articles
    {
        index: 1,
        href: "https://www.writersdigest.com/be-inspired/what-aapi-heritage-month-means-to-me",
        title: "What AAPI Heritage Month Means to Me",
        publisher: "Writer's Digest",
        author: "",
        type: "interview" as const,
        date: new Date(2024, 5, 30),
        imagesrc: "",
        icon: ""
    },
    {
        index: 2,
        href: "https://www.writersdigest.com/write-better-fiction/tiffany-wang-i-can-only-write-in-complete-silence",
        title: "I Can Only Write in Complete Silence",
        publisher: "Writer's Digest",
        author: "Robert Lee Brewer",
        type: "interview" as const,
        date: new Date(2024, 10, 19),
        imagesrc: "",
        icon: ""
    },
    {
        index: 2,
        href: "https://frictionlit.org/an-interview-with-tiffany-wang/?srsltid=AfmBOoqm0AqbCinadP7KBkts_PVyRRFoC2DOnreYADoUyMKZ1gEQmEdP",
        title: "An Interview with Tiffany Wang",
        publisher: "f(r)iction",
        author: "Olivia Ocran",
        type: "interview" as const,
        date: new Date(2025,null,null),
        imagesrc: "",
        icon: ""
    },
    {
        index: 3,
        href: "https://thenerddaily.com/tiffany-wang-infernos-heir-author-interview/",
        title: "Q&A: Tiffany Wang, Author of Inferno's Heir",
        publisher: "Nerd Daily",
        author: "Elise Dumpleton",
        type: "interview" as const,
        date: new Date(2024, 10, 13),
        imagesrc: "",
        icon: ""
    },
    {
        index: 4,
        href: "https://thenerddaily.com/tiffany-wang-tempests-queen-author-interview/",
        title: "Q&A: Tiffany Wang, Author of Tempest's Queen",
        publisher: "Nerd Daily",
        author: "Elise Dumpleton",
        type: "interview" as const,
        date: new Date(2025, 10, 16),
        imagesrc: "",
        icon: ""
    },

    // Publication announcements
    {
        index: 100,
        href: "https://www.publishersweekly.com/pw/by-topic/childrens/childrens-book-news/article/98517-rights-report-week-of-september-1-2025.html",
        title: "Rights Report: The Secrets We Carry",
        publisher: "Publisher's Weekly",
        type: "rights" as const,
        date: new Date(2025, 9, 1),
        imagesrc: "",
        icon: ""
    },

    // Reviews
]

export default newsfeed;