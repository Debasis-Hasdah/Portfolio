/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="bg-gray-50 dark:bg-gray-900 py-10 mt-20 border-t border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-6">
        {/* Logo / Name */}
        <motion.h3
          className="text-2xl font-semibold text-gray-800 dark:text-white tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          Debasis Hasdah
        </motion.h3>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Line separator */}
        <div className="w-20 h-[2px] bg-indigo-500 rounded-full"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Debasis Hasdah. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
