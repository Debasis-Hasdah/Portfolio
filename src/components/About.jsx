/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function About() {
  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "MySQL",
    "Java",
    "UI/UX Basics",
    "Figma",
    
    
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.4 },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-8 px-4">
        <motion.h2
          className="text-4xl font-bold text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          I’m a passionate{" "}
          <span className="font-semibold text-indigo-500">Frontend Developer</span>{" "}
          who loves crafting modern, responsive, and user-friendly web applications.
          I enjoy working with React and Tailwind CSS to bring designs to life and
          ensure smooth user experiences. I’m always learning new technologies to
          stay up-to-date with the latest trends in development and design.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="p-3 text-sm border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:shadow-md transition-transform duration-200 cursor-default"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 200, damping: 12 },
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
