import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="
        mt-8 p-5 rounded-xl bg-white/40 backdrop-blur-md shadow-md 
        border border-blue-300 max-w-xl mx-auto text-center
      "
      id="education"
    >
      <h3 className="text-2xl font-semibold text-gray-500 mb-3">
        Education
      </h3>

   
      <motion.img
        src="convo.png"
        alt="Gurukul College"
        className="w-full h-70 object-cover rounded-lg shadow-lg mb-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <p className="text-lg font-medium text-gray-900">
        🎓 BSc IT — Gurukul College, Chiplun
      </p>

      <p className="text-gray-700 mt-1">
        Completed Bachelor's in <span className="text-blue-700">Information Technology.</span>
      </p>
    </motion.div>
  );
}
