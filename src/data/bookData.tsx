import type { BookProps } from "@/types/book";
import Hyperlink from "@components/ui/Hyperlink";
import bannercss from '@styles/components/banner.module.css'

const books: BookProps[] = [
    {   
        html_id: "infernosheir",    
        title: "Inferno's Heir", 
        library_subtitle: "Inferno's Heir Duology", 
        subtitle: "Fearing for her life, an outcast princess joins the rebellion against her own kingdom and family... but when playing with fire, someone always gets burned.", 
        nav: true,
        description: <>
        <p>Teia Carthan abandoned her morals long ago, and now there's nothing she won't do to stay alive. So far she has survived her parents' deaths, the ire of the Council, and innumerable attempts on her life, orchestrated by Jura, her half brother and soon-to-be king of Erisia. Teia's rare control over two elements marks her as both an outsider and a formidable opponent—but once Jura is crowned king, there will be no way to survive him. Not for Teia, not for anyone.</p>
        <p>When Jura moves to crush the rebellion that seeks to overthrow the monarchy, Teia sees one last opportunity to ensure her own safety. She can infiltrate the rebels, locate their base ... and betray them to Jura, trading their lives for her own.</p>
        <p>Yet when Teia meets the rebels, she gets far more than she bargained for. And when she gains not only their trust but their friendship, she begins to have doubts. Perhaps the rebels are right. Perhaps the Golden Palace should be torn down and the monarchy destroyed.</p>
        <p>But then again—what if there is another possibility? What if Teia were on the throne instead?</p>
            </>,
        comingsoon: false,
        release: "Fall 2024", 
        img_src: "/books/IH-CV.jpg", 
        img_caption: "cover by Dan Funderburgh",
        blurbs: [
        {   content: "A mesmerizing debut fantasy.", 
            name: "Rebecca Yarros", 
            bio: <>#1 New York Times bestselling author of <a href="https://rebeccayarros.com/fourthwing" target="_blank">Fourth Wing</a> and <a href="https://rebeccayarros.com/ironflame" target="_blank">Iron Flame</a></>
        }],
        href_goodreads: "https://www.goodreads.com/book/show/206777437-inferno-s-heir",
        purchaseLinks: [
        {   href: "https://www.barnesandnoble.com/w/infernos-heir-tiffany-wang/1144758931",
            site: "Barnes & Noble",
            type: "read" as const
        },
        {   href: "https://binderybooks.com/books/infernos-heir/",
            icon: <i className="bi bi-journal-richtext"></i>,
            site: "Bindery – Hardcover",
            type: "read" as const
        },
        {   href: "https://www.amazon.com/Infernos-Heir-Tiffany-Wang/dp/1959411772",
            icon: <i className="bi bi-amazon"></i>,
            site: 'Amazon / Kindle',
            type: "read" as const
        },
        {   href: "https://www.waterstones.com/book/infernos-heir/tiffany-wang/9781444980608",
            icon: <>🇬🇧</>,
            site: "Waterstones – UK",
            type: "read" as const
        },
        {   href: "https://books.apple.com/us/book/d%C4%9Bdic-pekla/id6748828763",
            icon: <>🇨🇿</>,
            site: "Apple Books – Czech",
            type: "read" as const
        },

        
        {   href: "https://open.spotify.com/show/3D8clfGNA4nqRpL1uAslzt",
            icon: <i className="bi bi-spotify"></i>,
            site: 'Spotify',
            type: "audio" as const
        },
        {   href: "https://podiumentertainment.com/titles/27478/infernos-heir",
            icon: <i className="bi bi-earbuds"></i>,
            site: "Podium",
            type: "audio" as const
        },
        {   href: "https://www.audible.com/pd/Infernos-Heir-Audiobook/B0D3JNTS33",
            icon: <i className="bi bi-earbuds"></i>,
            site: "Audible",
            type: "audio" as const
        }
        ],
    },
    {   
        html_id: "tempestsqueen", 
        title: "Tempest's Queen", 
        library_subtitle: "Inferno's Heir Duology", 
        subtitle: "The queen has won her crown. Now, she must prove she’s worthy to wear it.", 
        nav: true,
        description: <>
        <p>Six months ago, Teia Carthan seized the throne against all odds. She sacrificed everything—her morals, her friends, even the spark of love—to hear the whisper of her new Highness. </p>
        <p>Now, Teia sets sail across the Dark Sea to warn her cousin, the Shaylani emperor, of a threat that could doom the Five Cornelius Lehm lives, and he’s planning to raise the Serkawr. But as she begins a furious journey across Shaylan, Teia knows she needs help to defeat Lehm—even if it means working with the very rebels she betrayed to claim her crown. </p>
        <p>Trust is a fragile thing, and Teia crushed it beneath her heel. Can she earn the Dawnbreakers’ friendship once again? Or will the consequences of her treachery win out, dragging all she’s fought for like a wave to the depths? </p>
            </>,
        comingsoon: false,
        release: "Fall 2025", 
        img_src: "/books/TQ-CV.jpg", 
        img_caption: "cover by Dan Funderburgh",
        blurbs: [],
        href_goodreads: "https://www.goodreads.com/book/show/222942059-tempest-s-queen",
        purchaseLinks: [
        {   href: "https://www.barnesandnoble.com/w/tempests-queen-tiffany-wang/1146745369",
            site: "Barnes & Noble",
            type: "read" as const
        },
        {   href: "https://bookshop.org/p/books/tempest-s-queen-tiffany-wang/e6734463c7a45528?ean=9781964721446&next=t&next=t&affiliate=95637",
            site: "Bookshop",
            type: "read" as const
        },
        {   href: "https://www.amazon.com/Tempests-Queen-Infernos-Heir-Duology/dp/196472144X/ref=tmm_pap_swatch_0",
            icon: <i className="bi bi-amazon"></i>,
            site: 'Amazon / Kindle',
            type: "read" as const
        },
        {   href: "https://www.waterstones.com/book/tempests-queen/tiffany-wang/9781444980622",
            icon: <>🇬🇧</>,
            site: "Waterstones – UK",
            type: "read" as const
        },
    

        {   href: "https://open.spotify.com/show/61VGm6rfkp6W5trY4qi1V6",
            icon: <i className="bi bi-spotify"></i>,
            site: 'Spotify',
            type: "audio" as const
        },
        {   href: "https://www.audible.com/pd/Tempests-Queen-Audiobook/B0FSNG69W7?source_code=AUDORWS0718179KY7",
            icon: <i className="bi bi-earbuds"></i>,
            site: "Audible",
            type: "audio" as const
        }]
    },
    {   
        html_id: "secretswecarry", 
        title: "The Secrets We Carry", 
        library_subtitle: "Secrets We Carry Duology", 
        subtitle: "coming 2027", 
        nav: true,
        description: <>
        <p>An immortal goddess and a boy who has vowed revenge against the gods are caught in a political plot that could scorch the mortal realm and topple the heavens, while inexplicably falling in love with each other. Written as a duology coming in 2027.</p>
        <Hyperlink 
            text = {"Publisher's Weekly Announcement"}
            href = {"https://www.publishersweekly.com/pw/by-topic/childrens/childrens-book-news/article/98517-rights-report-week-of-september-1-2025.html"}
            classes = {bannercss['banner__link']}
            external
            inline
            underline={false}
            arrow
            />
            </>,
        comingsoon: true,
        release: "2027", 
        img_src: "/books/unreleased-cover.svg", 
        img_caption: "",
        blurbs: [],
        href_goodreads: "",
        purchaseLinks: []
    },
    {   
        html_id: "secretswecarry2", 
        title: "The Secrets We Carry - Book 2", 
        library_subtitle: "Secrets We Carry Duology", 
        subtitle: "coming 2027", 
        nav: false,
        description: "",
        comingsoon: true,
        release: "2027", 
        img_src: null, 
        img_caption: "",
        blurbs: [],
        href_goodreads: "",
        purchaseLinks: []
    }
]


export default books;