import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <footer
      ref={ref}
      className="mt-20 py-16 bg-[#0a0f1f] text-white 
                 shadow-[0_0_25px_rgba(0,183,255,0.25)]
                 border-t border-blue-700/40"
    >
      {/* 3D WOBBLE ANIMATION */}
      <motion.div
        initial={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
        animate={
          isInView
            ? { rotateX: 0, rotateY: 0, rotateZ: 0 } // stop when in view
            : {
                rotateX: [0, 10, -10, 5, -5, 0],
                rotateY: [0, -8, 8, -6, 6, 0],
                rotateZ: [0, 3, -3, 2, -2, 0],
              }
        }
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: isInView ? 0 : Infinity,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
        className="max-w-6xl mx-auto px-6 flex flex-col 
                   md:flex-row justify-between items-center gap-8"
      >
        {/* LOGO */}
        <h2 className="text-3xl font-bold drop-shadow-[0_0_8px_#00b7ff]">
          Aditya<span className="text-white-400">.</span>
        </h2>

        {/* LINKS */}
        <div className="flex gap-6 text-lg">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="text-gray-300 hover:text-blue-400 
                         drop-shadow-[0_0_6px_#00b7ff] transition"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-2xl">
          {[FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2 }}
              className="hover:text-blue-400 drop-shadow-[0_0_10px_#00b7ff]"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* COPYRIGHT */}
      <p className="text-center mt-10 text-gray-400 drop-shadow-[0_0_6px_#00b7ff]">
        © {new Date().getFullYear()} Aditya — Made with 🤍
      </p>
    </footer>
  );
}
