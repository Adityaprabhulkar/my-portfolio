import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative max-w-6xl mx-auto px-8 py-20" id="about">

  
      <img
        src="/gurukul.png"
        className="absolute inset-0 w-full h-full object-cover blur-lg opacity-30 -z-10"
      />

  
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        About <span className="text-gray-400">Me</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

 
        <motion.img
          src="about.jpg"
          alt="profile"
          className="rounded-2xl shadow-xl w-full object-cover"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />

 
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-7">
            Hello! I'm <b className="text-purple-600">Aditya</b>, a passionate Frontend Developer. 
            I love building clean, responsive, and interactive websites using modern 
            technologies like <b>React, JavaScript, Tailwind CSS & MERN Stack</b>.
          </p>

            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-7">
              I am currently working at 
              <b className="text-purple-600"> Hypes</b> as a 
              <b className="text-purple-600"> Frontend Developer</b>,
              where I build modern UI, animations and smooth user experiences.
            </p>

            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-7">
              I’m also learning advanced React, UI/UX and backend development — 
              aiming to become an industry-ready full-stack developer.
            </p>
          <motion.a
            href="/Aditya_Resume.pdf"
            target="_blank"
            download="Aditya_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="
              inline-block 
              mt-6 
              px-6 
              py-3 
              font-semibold 
              rounded-xl 
              text-white 
              shadow-lg
              relative
              overflow-hidden
              z-10
            "
          >
            <span
              className="
                absolute inset-0 
                bg-gradient-to-r 
                from-purple-500 
                via-pink-500 
                to-blue-500
                animate-gradientMove 
                opacity-90
                blur-sm
              "
            ></span>

            <span className="relative z-10">
              Download Resume
            </span>
          </motion.a>
        </motion.div>
      </div>
     </section>

    );
  };
