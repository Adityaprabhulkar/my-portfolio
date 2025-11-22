import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  ];

  // random number helper
  const random = (max) => Math.floor(Math.random() * max) - max / 2;

  // function that returns a variant object for each item
  const getVariants = () => ({
    hidden: {
      opacity: 0,
      scale: 0.4,
      x: random(300),
      y: random(300),
      rotateX: random(720),
      rotateY: random(720),
      rotateZ: random(720),
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      transition: {
        duration: 1.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  });

  return (
    <section className="py-20 px-8">
      <h2
      id="skills" className="text-4xl font-bold mb-8">Tech Stack</h2>

      <motion.div
        className="flex flex-wrap gap-6"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {skills.map((s) => (
          <motion.div
            key={s.name}
            variants={getVariants()}   // ← Ab har skill ka apna random path hoga
            whileHover={{
              scale: 1.15,
              rotateZ: 6,
              transition: { duration: 0.2 },
            }}
            className="flex items-center gap-3 p-4 bg-gray-200 dark:bg-gray-700 
                       rounded-xl shadow"
          >
            <span className="text-3xl">{s.icon}</span>
            <span className="font-semibold text-lg">{s.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
