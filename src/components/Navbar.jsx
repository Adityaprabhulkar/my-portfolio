import { useState, useEffect } from 'react';
import { motion } from "framer-motion";



export default function Navbar () {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
            ? "backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 shadow-lg"
            : "bg-transparent"
        }`}
        
        >
            <div className='"max-w-6xl mx-auto px-8 py-4 flex justify-between items-center"'>

            <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-extrabold tracking-wide"
                >

                     <span className="text-blue-600">My</span>Portfolio
            </motion.h1>
        <ul className="flex gap-8 font-medium text-lg">
          {["Home", "About", "Projects", "Contact"].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="cursor-pointer relative group"
            >
              {item}

             
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </motion.li>
          ))}
        </ul>
            </div>
        </nav>
    );
};