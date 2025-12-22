import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';

export function AnimatePageLoad ({ 
        ReactDOMElement
    } : {ReactDOMElement?: ReactNode}) {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 0 }} transition={{ duration: 1 }}>
                {ReactDOMElement}
            </motion.div>
        </AnimatePresence>
    )
}