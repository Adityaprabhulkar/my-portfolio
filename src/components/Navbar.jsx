import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);




  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
<nav
  className={`
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    backdrop-blur-xl 
    bg-gradient-to-r from-purple-100/50 via-white/40 to-purple-200/50 
    dark:from-purple-900/30 dark:via-gray-900/30 dark:to-purple-800/30 
    border-b border-purple-200/20 
    ${scrolled ? "shadow-xl scale-[1.01]" : "shadow-md"}
  `}
>

      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        
   
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-extrabold tracking-wide cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <span className="text-purple-500">My</span>Portfolio
        </motion.h1>

   
        <ul className="flex gap-6 font-medium text-lg">
          {["Home", "About", "Projects", "Contact"].map((item, i) => (
            <motion.li
              key={i}
              onClick={() => scrollToSection(item.toLowerCase())}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="
                cursor-pointer 
                px-3 py-1 
                rounded-md 
                transition-all 
                duration-200
                hover:bg-purple-300 
                hover:text-black
              "
            >
              {item}
            </motion.li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
