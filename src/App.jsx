import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Resume from "./components/Resume";


function App() {
  return (
    <div className="bg-[#0f172a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Expertise/>
      <Skills />
        <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;