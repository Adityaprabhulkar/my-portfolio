import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-20" id="about">
      

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        About <span className="text-blue-600">Me</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    
        <motion.img
          src="about.jpg" 
          alt="profile"
          className="rounded-2xl shadow-xl w-full object-cover"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ duration: 0.7 }}
          
        />

   
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-7">
            Hello! I'm <b className="text-blue-600">Aditya</b>, a passionate Web Developer. 
            I love building clean, responsive, and interactive websites using 
            modern technologies like <b>MERN Stack</b>.
          </p>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-7">
            Currently, I’m learning advanced React, UI/UX, animations & backend 
            development — aiming to become an industry-ready full-stack developer.
          </p>

        
       
        </motion.div>

      </div>
    </section>
  );
}
