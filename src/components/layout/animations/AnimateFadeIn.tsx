/* AnimatePageLoad 
 * framer-motion animation for crossfade upon new page
 */

// packages 
import { motion, AnimatePresence } from 'framer-motion'

// interfaces
import type { ReactNode } from 'react';

// render
export function AnimateFadeIn ({ 
        ReactDOMElement,
        duration = 1
    } : {
        ReactDOMElement?: ReactNode
        duration?: number
    }) {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 0 }} transition={{ duration: duration }}>
                {ReactDOMElement}
            </motion.div>
        </AnimatePresence>
    )
}