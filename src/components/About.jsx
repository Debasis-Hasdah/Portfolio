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
    "Node.js",
    "UI/UX Basics",
  ];

  return (
    <motion.section
      id="about"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 px-4">
        <motion.h2
          className="text-4xl font-bold text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’m a passionate{" "}
          <span className="font-semibold text-indigo-500">Frontend Developer</span>{" "}
          who loves crafting modern, responsive, and user-friendly web applications.  
          I enjoy working with React and Tailwind CSS to bring designs to life and  
          ensure smooth user experiences.  
          I’m constantly learning new technologies to improve my skills and stay  
          up-to-date with industry trends.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
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
