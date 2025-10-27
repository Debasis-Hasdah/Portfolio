/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left space-y-6 md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400">
          Hi, I’m Dev 👋
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold">
          Frontend Developer & Designer
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          I build modern and responsive web applications using React, Tailwind CSS, 
          and clean design principles.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="mb-10 md:mb-0 md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
        />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
