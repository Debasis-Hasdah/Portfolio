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
      className="relative py-20 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Soft blended gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-transparent dark:from-indigo-900/30 dark:via-purple-800/30 dark:to-black/10 blur-3xl opacity-70 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto text-center space-y-10 px-4">
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I’m a passionate{" "}
          <span className="font-semibold text-indigo-400">Frontend Developer</span>{" "}
          who loves crafting modern, responsive, and user-friendly web
          applications. I enjoy working with{" "}
          <span className="text-purple-400 font-medium">React</span> and{" "}
          <span className="text-indigo-400 font-medium">Tailwind CSS</span> to
          bring designs to life and ensure smooth user experiences. I’m always
          learning new technologies to stay up-to-date with the latest trends in
          development and design.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              className="p-4 text-sm font-medium text-gray-800 dark:text-gray-100 rounded-xl backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300 cursor-default"
              whileHover={{
                scale: 1.06,
                backgroundColor: "rgba(139,92,246,0.2)",
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
