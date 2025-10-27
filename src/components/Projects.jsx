/* eslint-disable no-unused-vars */


import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS to showcase my projects and skills.",
      image:
        "https://cdn.dribbble.com/userupload/14953186/file/original-bd22735c0b15a0cf2258f3a66a012e9e.png?resize=1024x768",
      github: "https://github.com/yourusername/portfolio",
      demo: "#",
    },
    {
      title: "Weather App",
      description:
        "A simple and clean weather forecasting app using OpenWeather API and React hooks.",
      image:
        "https://cdn.dribbble.com/userupload/10092638/file/original-fbba1fdb960efc2d1c5c0431dc7d3c09.png?resize=1024x768",
      github: "https://github.com/yourusername/weather-app",
      demo: "#",
    },
    {
      title: "Task Manager",
      description:
        "A to-do list app that helps organize daily tasks with local storage and dark mode support.",
      image:
        "https://cdn.dribbble.com/userupload/15324664/file/original-4b969a38e05cb2e15580c6bde54bfa62.png?resize=1024x768",
      github: "https://github.com/yourusername/task-manager",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.h2
          className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
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
                <p className="text-gray-600 dark:text-gray-300 text-sm">
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
