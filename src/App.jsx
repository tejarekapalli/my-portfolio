import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Experience from "./components/experience";
import Expertise from "./components/expertise";
import Resume from "./components/resume";

function App() {
  return (
    <div className="bg-[#0f172a] text-white">
      <Navbar />

      <Hero />

      <About />

      <Expertise />

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