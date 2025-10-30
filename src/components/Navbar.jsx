import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme when darkMode changes
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 
                 w-[90%] md:w-[80%] px-6 py-4 
                 flex justify-between items-center 
                 backdrop-blur-xl bg-white/10 dark:bg-[#0d0d1a]/40 
                 border border-white/20 dark:border-purple-500/20 
                 shadow-[0_0_20px_rgba(100,0,255,0.15)] 
                 rounded-2xl z-50 transition-all duration-500"
    >
      <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 select-none">
        Debasis Hasdah
      </h1>

      <div className="flex items-center space-x-6 text-sm md:text-base">
        <a
          href="#about"
          className="text-gray-200 hover:text-purple-400 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-blue-400 to-purple-500 after:transition-all hover:after:w-full"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-gray-200 hover:text-purple-400 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-blue-400 to-purple-500 after:transition-all hover:after:w-full"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-gray-200 hover:text-purple-400 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-blue-400 to-purple-500 after:transition-all hover:after:w-full"
        >
          Contact
        </a>

        {/* 🌙 / ☀️ Glass Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 
                     border border-white/20 backdrop-blur-md 
                     hover:shadow-[0_0_15px_rgba(180,100,255,0.5)] 
                     text-white transition-all duration-500"
          title="Toggle theme"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
