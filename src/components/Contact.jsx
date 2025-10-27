function Contact() {
  return (
    <section
      id="contact"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-8">
          Get In Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg mb-10">
          I’m always open to discussing new projects, creative ideas, or opportunities 
          to be part of your visions. Feel free to drop a message below!
        </p>

        <form
          action="https://formspree.io/f/mrboekvg"  
          method="POST"
          className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
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

          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center mt-12 space-x-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-indigo-500 transition"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
