import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center 
                 justify-between px-14 py-28
                 bg-gradient-to-b from-white to-blue-50 
                 dark:from-gray-900 dark:to-gray-800"
    >
      {/* LEFT CONTENT */}
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
          Hi, I'm <span className="text-blue-500">Aditya</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Web Development & UI/UX → Code + Creativity ={" "}
          <span className="text-blue-500 font-medium">Awesome Websites!</span>
        </motion.p>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.img
        src="/my-hero2.png"
        alt="Hero"
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{
          opacity: 1,
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
        className="w-[460px] md:w-[600px] rounded-2xl shadow-2xl mt-10 md:mt-0"
      />
    </section>
  );
}
