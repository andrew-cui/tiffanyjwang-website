import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './../components/NavBar.jsx'
import './../css/App.css'


function Contact() {
    const [count, setCount] = useState(0)

    return (
        <>
        <div>
        <NavBar/>
            contact
        </div>
        
        </>
    )
    }



export default Contact
