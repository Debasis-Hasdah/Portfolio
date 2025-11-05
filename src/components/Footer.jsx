/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="relative bg-gray-50 dark:bg-gray-900 py-10 mt-20 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Subtle gradient glow line on top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-6">
        {/* Name */}
        <motion.h3
          className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          Debasis Hasdah
        </motion.h3>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <motion.a
            href="https://github.com/Debasis-Hasdah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/debasis-hasdah-862004343/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/debasis_hasdah/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaFacebook />
          </motion.a>

          <motion.a
            href="mailto:youremail@example.com"
            className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Line separator */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Debasis Hasdah. Crafted with ❤️ using React & Tailwind CSS.
        </p>
      </div>

      {/* Optional soft gradient background glow */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pointer-events-none blur-3xl"></div>
    </motion.footer>
  );
}

export default Footer;
