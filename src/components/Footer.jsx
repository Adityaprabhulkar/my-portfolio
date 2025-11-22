export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300 py-12 px-6 mt-20">
      
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

 
        <div>
          <h2 className=" text-xl font-semibold text-blue-300 mb-3
          drop-shadow-[0_0_9px_#3b82f6]">Aditya.</h2>
          <p className="text-sm leading-6">
            Passionate Web Developer crafting responsive, modern and clean
            web experiences. MERN Stack enthusiast 🚀
          </p>
        </div>

   
        <div>
          <h3 className="text-xl font-semibold text-blue-300 mb-3 drop-shadow-[0_0_9px_#3b82f6]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-400 duration-200">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400 duration-200">Projects</a></li>
            <li><a href="#about" className="hover:text-blue-400 duration-200">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400 duration-200">Contact</a></li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold text-blue-300 mb-3 drop-shadow-[0_0_9px_#3b82f6]">Contact</h3>
          <p className="text-sm">📞 +91 93220 29196</p>
          <p className="text-sm mb-4">📧 adityaprabhulkar2000@gmail.com</p>

          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/" target="_blank"
               className="text-2xl hover:text-blue-400 duration-200">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank"
               className="text-2xl hover:text-blue-400 duration-200">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/" target="_blank"
               className="text-2xl hover:text-blue-400 duration-200">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

    
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        © 2025 Aditya — Made with ❤️  
      </div>
    </footer>
  );
}
