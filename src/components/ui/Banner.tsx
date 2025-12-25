import clsx from 'clsx'
import { Hyperlink } from '@components/ui/Hyperlink'
import type { BannerProps } from '@/types/banner'
import css from '@styles/components/banner.module.css'
import variantcss from '@styles/app/variants.module.css'

export function Banner ({ 
    title = '', 
    subtitle, 
    content, 
    links = [], 
    imgSrc = undefined,
    variant
} : BannerProps) {
    return (
        <div className={clsx(css.banner, variant && variantcss[`banner_${variant}`])}>
            {imgSrc && (
                <div className={css.banner_image}>
                    <img src={imgSrc}/>
                </div>
            )}
            <div className={css.banner_body}>
                <h4 className={css.banner_subtitle}>{subtitle}</h4>
                <h3 className={css.banner_title}>{title}</h3>
                <div className={css.banner_content}>{content}</div>
                    {links.map((item, index) => (
                        <Hyperlink 
                            key={index}
                            text={item.name}
                            href={item.href}
                            classes={clsx(css.banner_link)}
                            variant={variant}
                            external={item.external}
                            underline={false}
                            inline
                            arrow
                        />
                    ))}
            </div>
        </div>
    )
}