/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer & Designer";

  // Auto typing animation when in view
  const handleTyping = () => {
    let index = 0;
    setDisplayText("");
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
  };

  return (
    <motion.section
      id="home"
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#060014] via-[#0b0030] to-[#13004a] text-white px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: false, amount: 0.3 }}
      onViewportEnter={handleTyping}
    >
      {/* Bigger and More Transparent Glass Box */}
      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 p-14 rounded-[2rem] backdrop-blur-3xl bg-white/5 border border-white/15 shadow-[0_0_80px_rgba(139,92,246,0.25)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        {/* Left: Text Content */}
        <motion.div
          className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m Debasis 👋
          </motion.h1>

          {/* Typing Animation */}
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-indigo-300 h-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {displayText}
            <span className="border-r-2 border-indigo-400 ml-1 animate-pulse"></span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I build smooth, interactive, and modern web experiences using{" "}
            <span className="text-indigo-400 font-medium">React</span> and{" "}
            <span className="text-purple-400 font-medium">Tailwind CSS</span>. My goal is
            to design with clarity and code with precision.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-800/40 to-indigo-700/40 backdrop-blur-lg text-white border border-white/20 shadow-lg hover:shadow-purple-400/40 transition-all duration-500"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl bg-transparent border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/20 backdrop-blur-md transition-all duration-500"
            >
              Contact Me
            </a>

            <a
              href="public/debasis resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-800/40 to-purple-800/40 text-white backdrop-blur-lg border border-white/20 hover:shadow-purple-400/40 transition-all duration-500"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="flex justify-center md:justify-end md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <img
            src="/deba1.jpg"
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border border-white/25 shadow-[0_0_50px_rgba(139,92,246,0.4)]"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
