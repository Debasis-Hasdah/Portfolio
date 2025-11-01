/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS to showcase my projects and skills.",
      image:
        "https://cdn.dribbble.com/userupload/39865752/file/original-a4fe2f94baeea3e64e2d09083ac271c8.png?format=webp&resize=400x300&vertical=center",
      github: "https://github.com/yourusername/portfolio",
      demo: "#",
    },
    {
      title: "Weather App",
      description:
        "A clean weather app using OpenWeather API and React hooks to display real-time forecasts.",
      image:
        "https://i.pinimg.com/736x/e0/4d/c2/e04dc2dd119d5d947ab138d93020079e.jpg",
      github: "https://github.com/yourusername/weather-app",
      demo: "#",
    },
    {
      title: "Task Manager",
      description:
        "A to-do list app that helps organize daily tasks with local storage and dark mode support.",
      image:
        "https://s3-alpha.figma.com/hub/file/2614715887/2f4f0e71-9647-4ef6-a5e7-86aa7d7b5ffd-cover.png",
      github: "https://github.com/yourusername/task-manager",
      demo: "#",
    },
    {
      title: "Mentoring Application",
      description:
        "A platform that connects mentors and learners for personalized skill development and guidance.",
      image:
        "https://aieduerp.com/wp-content/uploads/2024/11/AI-Edu-School-College-ERP-Software-v3.webp",
      github: "https://github.com/yourusername/mentoring-app",
      demo: "#",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // ✅ Auto slide with auto resume after 5s pause
  useEffect(() => {
    let interval;
    if (!paused) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % projects.length);
      }, 3000);
    } else {
      const resume = setTimeout(() => setPaused(false), 5000);
      return () => clearTimeout(resume);
    }
    return () => clearInterval(interval);
  }, [paused, projects.length]);

  const handlePrev = () => {
    setPaused(true);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setPaused(true);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const TiltCard = ({ project, isActive, rotate }) => {
    return (
      <motion.div
        className={`relative w-[320px] sm:w-[360px] lg:w-[380px] h-[420px] mx-auto rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl 
        bg-gradient-to-br from-[#0f0f2e]/60 via-[#1a1045]/40 to-[#130035]/60 
        shadow-[0_0_25px_rgba(120,0,255,0.2)] transition-all duration-500`}
        style={{
          transform: `perspective(1000px) rotateY(${rotate}deg) scale(${isActive ? 1 : 0.9})`,
          opacity: 1,
        }}
        whileHover={
          isActive
            ? {
                boxShadow: "0px 0px 40px rgba(130,80,255,0.5)",
                scale: 1.03,
              }
            : {}
        }
      >
        {/* slightly larger image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover opacity-90 hover:opacity-100 transition"
        />

        <div className="p-5 space-y-3">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex justify-center gap-4 pt-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 
                         border border-white/20 text-blue-300 hover:text-white 
                         hover:shadow-[0_0_15px_rgba(100,150,255,0.4)] transition-all"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg backdrop-blur-md 
                         bg-gradient-to-r from-blue-500/30 to-purple-500/30 
                         border border-purple-500/40 text-white hover:shadow-[0_0_15px_rgba(160,100,255,0.5)] 
                         hover:scale-105 transition-all"
            >
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="projects"
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-80 h-80 bg-blue-700/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-700/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center px-4 relative">
        <motion.h2
          className="text-4xl font-bold mb-14 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Carousel */}
        <div className="relative flex justify-center items-center min-h-[480px]">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-20"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="flex items-center justify-center relative w-full h-[420px]">
            {projects.map((project, i) => {
              const offset = (i - index + projects.length) % projects.length;

              let style = {};
              let rotate = 0;
              let isActive = false;

              if (offset === 0) {
                style = { transform: "translateX(0%)" };
                isActive = true;
                rotate = 0;
              } else if (offset === 1) {
                style = { transform: "translateX(105%)" }; // slightly reduced from 110% to smooth wrap
                rotate = -10;
              } else if (offset === projects.length - 1) {
                style = { transform: "translateX(-105%)" };
                rotate = 10;
              } else {
                style = { opacity: 0, transform: "translateX(200%)" };
              }

              return (
                <motion.div
                  key={i}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    ...style,
                    left: "50%",
                    transform: `${style.transform} translateX(-50%)`,
                  }}
                >
                  <TiltCard project={project} isActive={isActive} rotate={rotate} />
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-20"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
