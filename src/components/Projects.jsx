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
      url: "https://adityaprabhulkar.github.io/"
    },
    { 
      title: "Weather App", 
      desc: "Vanilla JavaScript weather app using OpenWeather API.",
      img: "/weather.png",
      url: "https://adityaprabhulkar.github.io/Weather_App/"
    }
  ];

  return (
    <section className="py-20 px-8" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        My <span className="text-orange-400">Projects</span>
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
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.7 }}
              className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-lg 
                         hover:shadow-blue-500/40 transition-all h-full"
            >
     
              <motion.img
                src={p.img}
                alt={p.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
