/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }} // 👈 animation replays when scrolling back
    >
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left space-y-6 md:w-1/2"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          Hi, I’m Dev 👋
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false }}
        >
          Frontend Developer & Designer
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false }}
        >
          I build modern and responsive web applications using React, Tailwind CSS, 
          and clean design principles.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: false }}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf" // 👈 put your actual resume file path or Google Drive link here
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="mb-10 md:mb-0 md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <motion.img
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
