import clsx from 'clsx'
import Hyperlink from '@components/ui/Hyperlink'
import type { BannerProps } from '@/types/banner'
import css from '@styles/components/banner.module.css'
import variantcss from '@styles/app/variants.module.css'

export default function Banner ({ 
    title = '', 
    subtitle, 
    content, 
    links = [], 
    imgSrc = undefined,
    variant
} : BannerProps) {
    return (
        <div className={clsx(css.banner, variant && variantcss[`banner--${variant}`])}>
            {imgSrc && (
                <div className={css.banner__image}>
                    <img src={imgSrc}/>
                </div>
            )}
            <div className={css.banner__body}>
                <h4 className={css.banner__subtitle}>{subtitle}</h4>
                <h3 className={css.banner__title}>{title}</h3>
                <div className={css.banner__content}>{content}</div>
                    {links.map((item, index) => (
                        <Hyperlink 
                            key={index}
                            text={item.name}
                            href={item.href}
                            classes={clsx(css.banner__link)}
                            variant={variant ?? undefined}
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