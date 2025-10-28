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

  // Tilt effect component
  const TiltCard = ({ project }) => {
    const [transform, setTransform] = useState("none");

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / 15).toFixed(2);
      const rotateY = ((x - rect.width / 2) / 15).toFixed(2);
      setTransform(`rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg) scale(1.03)`);
    };

    const handleMouseLeave = () => {
      setTransform("none");
    };

    return (
      <motion.div
        variants={cardVariants}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all"
        style={{
          transform,
          transformStyle: "preserve-3d",
          perspective: "1000px",
          transition: "transform 0.2s ease",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          boxShadow: "0px 0px 25px rgba(99,102,241,0.4)", // glowing border
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
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
      className="py-20 border-t border-gray-200 dark:border-gray-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.h2
          className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
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
