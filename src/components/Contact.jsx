/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    // Let Formspree handle the submission
    setSent(true);

    // Hide success message after 4 seconds
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-8"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          I’m always open to discussing new projects, creative ideas, or opportunities 
          to be part of your visions. Feel free to drop a message below!
        </motion.p>

        <motion.form
          action="https://formspree.io/f/mrboekvg"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md relative"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-transparent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-transparent"
              required
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-transparent"
            required
          ></textarea>

          <motion.button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {sent ? "Sent ✅" : "Send Message"}
          </motion.button>

          {sent && (
            <motion.p
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-green-600 dark:text-green-400 font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Message sent successfully!
            </motion.p>
          )}
        </motion.form>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center mt-12 space-x-6 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              href: "https://github.com/yourusername",
              icon: "fa-brands fa-github",
            },
            {
              href: "https://linkedin.com/in/yourusername",
              icon: "fa-brands fa-linkedin",
            },
            {
              href: "mailto:your@email.com",
              icon: "fa-solid fa-envelope",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
              whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={item.icon}></i>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
