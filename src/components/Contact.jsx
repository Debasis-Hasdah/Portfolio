/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.section
      id="contact"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto text-center px-4 space-y-8">
        <motion.h2
          className="text-4xl font-bold text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          I’d love to hear from you! Whether it’s a question, collaboration, or just to say hi —
          choose your preferred way to reach out.
        </motion.p>

        {/* Two Contact Options */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.button
            onClick={() => setShowForm(!showForm)}
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showForm ? "Close Form" : "Send Email"}
          </motion.button>

          <motion.a
            href="https://www.linkedin.com/in/debasis-hasdah-862004343/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect on LinkedIn
          </motion.a>
        </motion.div>

        {/* Email Form (Toggles On Click) */}
        {showForm && (
          <motion.form
            className="mt-10 space-y-6 max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            action="https://formspree.io/f/yourFormID" // 👈 replace with your Formspree endpoint
            method="POST"
          >
            <div>
              <label className="block text-left text-gray-700 dark:text-gray-300 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 dark:text-gray-300 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 dark:text-gray-300 font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
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
