import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-400 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-300 text-4xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-400 text-4xl" /> },
  ];

 
  const getVariants = () => ({
    hidden: {
      opacity: 0,
      scale: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      scale: [0.4, 1.2, 0.9, 1],
      y: [80, -20, 10, 0],
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 160,
        damping: 9,
      },
    },
  });

  return (
    <section
      id="skills"
      className="py-24 px-8 bg-gradient-to-b from-[#1a1a1f] to-[#111113]
                 border-t border-white/10 shadow-[0_0_35px_rgba(150,100,255,0.25)]"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My <span className="text-purple-300">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={getVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-xl
                       border border-purple-400/20
                       shadow-[0_0_20px_rgba(150,100,255,0.25)]
                       flex flex-col items-center gap-3
                       hover:shadow-[0_0_40px_rgba(170,120,255,0.5)]
                       transition duration-300"
          >

        
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              {skill.icon}
            </motion.div>

            <p className="text-gray-200 text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
