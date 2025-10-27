function About() {
  return (
    <section
      id="about"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 px-4">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
          About Me
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          I’m a passionate <span className="font-semibold text-indigo-500">Frontend Developer</span> 
          who loves crafting modern, responsive, and user-friendly web applications.  
          I enjoy working with React and Tailwind CSS to bring designs to life and 
          ensure smooth user experiences.  
          I’m constantly learning new technologies to improve my skills and stay up-to-date 
          with industry trends.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-8">
          {[
            "React",
            "Tailwind CSS",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Git & GitHub",
            "Node.js",
            "UI/UX Basics",
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
