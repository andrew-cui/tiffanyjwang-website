import clsx from 'clsx'
import css from '@styles/components/spacer.module.css'

export default function Spacer({
    size = "s",
    inline = false
}: {
    size?: "xs" | "s" | "m" | "l" | "xl"
    inline?: boolean
}) {
    return (
    <div className={clsx(
        clsx(
            css.spacer, 
            css[`spacer--${size ?? "s"}`],
            inline && css['spacer--inline'])
    )}/>)
}