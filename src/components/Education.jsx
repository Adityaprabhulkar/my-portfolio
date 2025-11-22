import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        m-26 p-10 w-full max-w-4xl mx-auto 
        bg-gradient-to-b from-[#1f1f25] to-[#2b2b33]
        shadow-[0_0_20px_rgba(190,122,255,0.3)]
        backdrop-blur-xl border border-white/10
        text-center 
      "
      id="education"
    >
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-200"
      >
        Education <span className="text-purple-300">Details</span>
      </motion.h2>

      <motion.img
        src="/convo.png"
        alt="Gurukul College"
        className="w-full max-h-80 object-cover mt-8 shadow-[0_0_5px_rgba(178,122,255,0.3)]"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <p className="text-2xl font-semibold mt-6 text-gray-200">
        🎓 BSc IT — Gurukul College, Chiplun
      </p>

      <p className="text-gray-200 mt-2 text-lg">
        Completed Bachelor's in{" "}
        <span className="text-purple-300">Information Technology</span>.
      </p>
    </motion.div>
  );
}
