import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Contact />

      </main>
      <Footer/>
    </div>
  );
}

export default App;