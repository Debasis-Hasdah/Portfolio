/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-20 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black/30 blur-3xl opacity-70 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Contact Info */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6 -mt-6" // moved slightly up
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Let’s Connect
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I’d love to hear from you! Whether it’s a question, collaboration, or just to say hi —{" "}
            <span className="text-indigo-400 font-medium">let’s create something amazing together.</span>
          </p>

          {/* LinkedIn button */}
          <motion.a
            href="https://www.linkedin.com/in/debasis-hasdah-862004343/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-white/10 text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={22} className="text-blue-400" />
            Connect on LinkedIn
          </motion.a>
        </motion.div>

        {/* Right side - Email Form */}
        <motion.form
          className="w-full lg:w-[42%] backdrop-blur-2xl bg-white/10 dark:bg-gray-800/20 p-7 rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl" // smaller form box
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          action="https://formspree.io/f/yourFormID"
          method="POST"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Send a Message
          </h3>

          <div className="space-y-5">
            <div>
              <label className="block text-left text-gray-200 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none backdrop-blur-md"
              />
            </div>

            <div>
              <label className="block text-left text-gray-200 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none backdrop-blur-md"
              />
            </div>

            <div>
              <label className="block text-left text-gray-200 font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-2 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none backdrop-blur-md"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
