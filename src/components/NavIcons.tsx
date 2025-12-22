import socials from '@data/socialsData'

export function NavIcons () { 
    return (
        <div className="nav-bot">
            <div className="nav-bot-icons">
                {socials.map((item, index) => (
                <div key={index} className="nav-icon">
                    <a
                        href={item.href || "#"}
                        target={`${item.label == "home" ? '' : "_blank"}`}
                    >{item.icon}
                    </a>
                </div>
                ))}
            </div>
            <p className="nav-bot-cr">Copyright &copy; Tiffany Wang, 2024-2026. All rights reserved.</p>
        </div>
    )
}
