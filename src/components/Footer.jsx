export default function Footer() {
  return (
    <footer
      className="
        bg-gradient-to-b 
        from-[#0a0f1f] via-[#0b1229] to-[#0a0e1b]
        text-gray-300 py-12 px-6 mt-20
        border-t border-blue-400
        shadow-[0_0_25px_rgba(120,180,255,0.3)]
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

    
        <div>
          <h2
            className="
              text-xl font-semibold text-blue-300 mb-3
              drop-shadow-[0_0_12px_#60a5fa]
            "
          >
            Aditya.
          </h2>
          <p className="text-sm leading-6">
            Passionate Web Developer crafting responsive, modern and clean
            web experiences. MERN Stack enthusiast 🚀
          </p>
        </div>

   
        <div>
          <h3
            className="
              text-xl font-semibold text-blue-300 mb-3
              drop-shadow-[0_0_12px_#60a5fa]
            "
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-400 duration-200">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400 duration-200">Projects</a></li>
            <li><a href="#about" className="hover:text-blue-400 duration-200">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400 duration-200">Contact</a></li>
          </ul>
        </div>

     
        <div>
          <h3
            className="
              text-xl font-semibold text-blue-300 mb-3
              drop-shadow-[0_0_12px_#60a5fa]
            "
          >
            Contact
          </h3>
          <p className="text-sm">📞 +91 93220 29196</p>
          <p className="text-sm mb-4">📧 adityaprabhulkar2000@gmail.com</p>

          <div className="flex space-x-4 mt-2 text-2xl">
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-blue-400 transition drop-shadow-[0_0_8px_#60a5fa]"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400 transition drop-shadow-[0_0_8px_#60a5fa]"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="mailto:adityaprabhulkar2000@gmail.com"
              className="hover:text-blue-400 transition drop-shadow-[0_0_8px_#60a5fa]"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

 
      <p className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Aditya Prabhulkar — All Rights Reserved.
      </p>
    </footer>
  );
}
