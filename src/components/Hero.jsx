import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";


export default function Hero() {
  return (
<section
  id="home"
  className="
    min-h-screen flex flex-col md:flex-row items-center justify-between 
    px-14 py-28

    /* GLASS + GRADIENT MATCH NAVBAR */
    bg-gradient-to-b 
    from-purple-50/70 
    via-white/70 
    to-purple-100/60 

    dark:from-gray-900/80 
    dark:via-gray-800/70 
    dark:to-purple-900/30
    backdrop-blur-sm
  "
>
     
      <motion.div
        className="max-w-xl space-y-4"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="text-purple-700">
            <Typewriter
              words={["Aditya", "Web Developer", "UI/UX Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Web Development & UI/UX → Code + Creativity ={" "}
          <span className="text-purple-700 font-medium">Awesome Websites!</span>
        </motion.p>
      </motion.div>

   
      <motion.img
        src="/my-hero2.png"
        alt="Hero"
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{
          opacity: 5,
          scale: 1,
          x: 0,
          y: [0, -12, 0], // floating animation
        }}
        transition={{
          duration: 0.5,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.06 }}
        className="w-[450px] md:w-[500px] rounded-2xl shadow-3xl mt-10 md:mt-0 cursor-pointer"
      />
    </section>
  );
}
