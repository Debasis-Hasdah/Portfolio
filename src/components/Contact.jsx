/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.section
      id="contact"
      className="relative py-20 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Gradient space background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black/30 blur-3xl opacity-70 pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto text-center px-4 space-y-8">
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          I’d love to hear from you! Whether it’s a question, collaboration, or just to say hi —{" "}
          <span className="text-indigo-400 font-medium">let’s create something amazing together.</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.button
            onClick={() => setShowForm(!showForm)}
            className="px-8 py-4 rounded-xl backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-white/10 text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showForm ? "Close Form" : "Send Email"}
          </motion.button>

          <motion.a
            href="https://www.linkedin.com/in/debasis-hasdah-862004343/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-white/10 text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect on LinkedIn
          </motion.a>
        </motion.div>

        {/* Email Form */}
        {showForm && (
          <motion.form
            className="mt-12 space-y-6 max-w-md mx-auto backdrop-blur-2xl bg-white/10 dark:bg-gray-800/20 p-8 rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            action="https://formspree.io/f/yourFormID"
            method="POST"
          >
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
          </motion.form>
        )}
      </div>
    </motion.section>
  );
}

export default Contact;
