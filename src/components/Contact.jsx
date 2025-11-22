import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
     className="     bg-gradient-to-b 
    from-purple-50/70 
    via-white/70 
    to-purple-100/60 

    dark:from-gray-900/80 
    dark:via-gray-800/70 
    dark:to-purple-900/30
    backdrop-blur-sm
  py-20 px-8 text-center " id="contact">

  
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Contact <span className="text-blue-600">Me</span>
      </motion.h2>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 text-lg"
      >

   
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3"
        >
          <FaPhoneAlt className="text-blue-600 text-2xl" />
          <a href="tel:+919322029196" className="hover:text-blue-600 transition">
            +91 93220 29196
          </a>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3"
        >
          <MdEmail className="text-red-500 text-2xl" />
          <a
            href="mailto:adityaprabhulkar2000@gmail.com"
            className="hover:text-blue-600 transition"
          >
            adityaprabhulkar2000@gmail.com
          </a>
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center gap-10 mt-6"
        >
   
          <motion.a
            href="https://www.linkedin.com/in/adityaprabhulkar"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-500 text-5xl "
          >
            <FaLinkedin />
          </motion.a>

  
          <motion.a
            href="https://github.com/adityaprabhulkar"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-900 dark:text-white text-5xl drop-shadow-[0_0_6px_#ffffff]"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
