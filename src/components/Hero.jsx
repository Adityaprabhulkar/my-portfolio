import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
        <section
          id="home"
          className="
            min-h-screen flex flex-col md:flex-row items-center 
            justify-center md:justify-between
            px-14 py-28
            bg-gradient-to-b
            from-[#0b0f19]
            via-[#0c1122]
            to-[#1a0b25]
            text-white relative overflow-hidden
          "
        >
    
      <motion.div
        className=" ml-20 max-w-xl space-y-4 z-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl font-bold drop-shadow-[0_0_20px_rgba(150,100,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="text-purple-400 inline-block min-w-[210px] ">
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
          className="text-xl text-gray-200 drop-shadow-[0_0_5px_rgba(120,150,255,0.4)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm a passionate MERN stack developer who loves building beautiful UI
          and smooth digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="
              px-6 py-3 bg-purple-600 hover:bg-purple-700 
              rounded-xl font-semibold text-white
              drop-shadow-[0_0_15px_rgba(150,000,205,0.6)]
              transition-all duration-300
            "
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

   
      <motion.div
        className="relative flex justify-center items-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
     
        <div className="
          absolute bottom-0 w-40 h-6
          bg-purple-500/30 blur-2xl rounded-full opacity-60
        "></div>

   
        <motion.img
          src="/my-hero2.png"
          alt="Hero"
          className=" m-20 rounded-2xl w-[300px] md:w-[420px] drop-shadow-[0_0_15px_rgba(150,000,205,0.6)]"
          initial={{ y: 0 }}
          animate={{
            y: [0, -12, 0], 
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
