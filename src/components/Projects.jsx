import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    { 
      title: "Startups-Voting App", 
      desc: "MERN-style voting board with upvotes.",
      img: "/voting-board.png",
      url: "https://adityaprabhulkar.github.io/startup-voting-board/"
    },
    { 
      title: "Portfolio", 
      desc: "My personal portfolio website.",
      img: "/portfolio.png",
      url: "https://my-portfolio-me8un2ffa-aditya-prabhulkar-s-projects.vercel.app/"
    },
    { 
      title: "Weather App", 
      desc: "Vanilla JavaScript weather app using OpenWeather API.",
      img: "/weather.png",
      url: "https://adityaprabhulkar.github.io/Weather_App/"
    }
  ];

  return (
    <section
      className="
        py-20 px-8
        bg-gradient-to-b from-[#0f0f17] via-[#1a1a27] to-[#2a1f3c]
        text-gray-200
      "
      id="projects"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-14 text-center"
      >
        My <span className="text-blue-300">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p) => (
          <a 
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="
                p-5 rounded-xl 
                bg-gradient-to-br from-blue-600/20 via-blue-400/10 to-blue-300/10
                backdrop-blur-xl
                border border-white-400/20
                shadow-[0_0_25px_rgba(120,180,255,0.4)]
                hover:shadow-[0_0_15px_rgba(120,180,255,0.6)]
                transition-all
                text-gray-200
              "
            >
              <motion.img
                src={p.img}
                alt={p.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              <h3 className="text-2xl font-semibold text-blue-300">{p.title}</h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
