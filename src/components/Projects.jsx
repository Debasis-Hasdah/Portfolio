/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

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
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const TiltCard = ({ project }) => {
    const [transform, setTransform] = useState("none");

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / 15).toFixed(2);
      const rotateY = ((x - rect.width / 2) / 15).toFixed(2);
      setTransform(`rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`);
    };

    const handleMouseLeave = () => {
      setTransform("none");
    };

    return (
      <motion.div
        variants={cardVariants}
        className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl 
                  bg-gradient-to-br from-[#0f0f2e]/60 via-[#1a1045]/40 to-[#130035]/60 
                  shadow-[0_0_25px_rgba(120,0,255,0.2)] transition-all duration-300"
        style={{
          transform,
          transformStyle: "preserve-3d",
          perspective: "1000px",
          transition: "transform 0.2s ease",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          boxShadow: "0px 0px 40px rgba(130,80,255,0.5)",
        }}
      >
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition"
          />
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex justify-center gap-4">
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* 🌌 Background gradient blur orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-80 h-80 bg-blue-700/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-700/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <TiltCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
