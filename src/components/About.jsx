import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        w-full px-8 py-20 
        bg-gradient-to-b
        from-[#1a1c2b]
        via-[#23263a]
        to-[#2d1b3a]
        text-gray-200
      "
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        <span className="text-gray-100">About </span>
        <span className="text-purple-400">Me</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

  
        <motion.img
            src="/about.jpg"
            alt="profile"
            className="
              rounded-2xl 
              shadow-xl 
              w-full 
              h-[350px] 
              object-cover 
              object-center
            "
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />

    
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <p className="text-lg text-gray-300 leading-7">
            Hello! I'm <b className="text-purple-300">Aditya</b>, a passionate
            Frontend Developer. I love building clean, responsive, and
            interactive websites using modern technologies like{" "}
            <b className="text-purple-300">React, JavaScript, Tailwind CSS & MERN Stack</b>.
          </p>

          <p className="text-lg text-gray-300 leading-7">
            I am currently working at
            <b className="text-purple-300"> Hypes</b> as a
            <b className="text-purple-300"> Frontend Developer</b>, where I build
            modern UI, animations, and smooth experiences.
          </p>

          <p className="text-lg text-gray-300 leading-7">
            I’m also learning advanced React, UI/UX and backend development —
            aiming to become an industry-ready full-stack developer.
          </p>

  
          <motion.a
            href="/Aditya_Resume.pdf"
            target="_blank"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-block mt-4 px-6 py-3 font-semibold 
              rounded-xl text-white shadow-lg relative overflow-hidden z-10
            "
          >
            <span
              className="absolute inset-0 
                bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400
                animate-gradientMove opacity-90 blur-sm"
            ></span>

            <span className="relative z-10">Download Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
