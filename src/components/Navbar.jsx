import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        backdrop-blur-xl
        
       
        bg-gradient-to-r 
        from-blue-600/20 via-purple-500/10 to-blue-400/20
        dark:from-blue-900/40 dark:via-purple-900/30 dark:to-blue-800/40

        /* 🔥 Neon Border */
        border-b border-blue-400/30 dark:border-purple-500/40

        /* 🔥 Scroll Effect */
        ${scrolled ? "shadow-[0_0_25px_rgba(120,180,255,0.7)] scale-[1.01]" : ""}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

    
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >

         <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-extrabold tracking-wide"
          >
            <span className="text-gray-300 ">Aditya</span>{" "}
            <span className="text-gray-300 ">Prabhulkar</span>
          </motion.h1>
        </div>

  
        <ul className="hidden md:flex gap-6 font-medium">
          {["home", "about", "education", "skills", "projects", "contact"].map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className="cursor-pointer capitalize text-white/90 
                         hover:text-blue-300 transition 
                         hover:drop-shadow-[0_0_12px_#7dd3fc]"
            >
              {section}
            </li>
          ))}
        </ul>

     
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

 
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 
            bg-gradient-to-br 
            from-blue-500/20 via-purple-600/20 to-blue-300/20
            border-t border-purple-400/20 
            backdrop-blur-xl
            shadow-[0_0_20px_rgba(140,120,255,0.4)]
          "
        >
          {["home", "about", "education", "skills", "projects", "contact"].map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className="cursor-pointer capitalize text-white text-lg 
                         hover:text-purple-300 transition 
                         hover:drop-shadow-[0_0_12px_#c084fc]"
            >
              {section}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
