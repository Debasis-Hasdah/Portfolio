import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // 🔄 Apply theme whenever darkMode changes
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
    <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Debasis Hasdah
      </h1>

      <div className="flex items-center space-x-6">
        <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          About
        </a>
        <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          Projects
        </a>
        <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          Contact
        </a>

        {/* 🌙 Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300"
          title="Toggle theme"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
