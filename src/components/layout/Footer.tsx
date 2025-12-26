import socials from '@data/socialsData'
import css from '@styles/components/nav.module.css'

export default function Footer () { 
    return (
        <div className={css.footer}>
            <div className={css.footer__icons}>
                {socials.map((item, index) => (
                <div key={index} className={css.footer__icon}>
                    <a
                        href={item.href || "#"}
                        target={`${item.label == "home" ? '' : "_blank"}`}
                    >{item.icon}
                    </a>
                </div>
                ))}
            </div>
            <p className={css.footer__copyright}>Copyright &copy; Tiffany Wang, 2024-2026. All rights reserved.</p>
        </div>
    )
}
