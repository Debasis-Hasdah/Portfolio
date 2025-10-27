function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-10 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} Debasis Hasdah. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-3">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
