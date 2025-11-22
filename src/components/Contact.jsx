import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-20 px-8 text-center
        bg-gradient-to-b
        from-[#0f0f17]
        via-[#1a1a27]
        to-[#2a1f3c]
        text-gray-200
      "
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10"
      >
        Contact <span className="text-blue-300">Me</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          max-w-xl mx-auto p-8 rounded-2xl
          bg-gradient-to-br from-blue-600/20 via-blue-400/10 to-blue-300/10
          border border-blue-400/
          shadow-[0_0_30px_rgba(120,180,255,0.4)]
          backdrop-blur-xl
          space-y-6
        "
      >

    
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 text-lg"
        >
          <FaPhoneAlt className="text-blue-300 text-2xl" />
          <a href="tel:+919322029196" className="hover:text-blue-200 transition">
            +91 93220 29196
          </a>
        </motion.div>

 
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 text-lg"
        >
          <MdEmail className="text-red-400 text-2xl" />
          <a
            href="mailto:adityaprabhulkar2000@gmail.com"
            className="hover:text-blue-300 transition"
          >
            adityaprabhulkar2000@gmail.com
          </a>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center gap-14 pt-6"
        >
          <motion.a
            href="https://www.linkedin.com/in/aditya-prabhulkar-0a17a8346/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-450 text-5xl drop-shadow-[0_0_10px_#77c4ff]"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/adityaprabhulkar"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="
              text-gray-100 text-5xl
              drop-shadow-[0_0_10px_#ffffff]
            "
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
