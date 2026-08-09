import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          onClick={closeMenu}
          className="text-xl md:text-2xl font-bold text-blue-500 cursor-pointer"
        >
          Rekapalli Teja
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">

          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-500 transition"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-500 transition"
          >
            About
          </Link>

          <Link
            to="expertise"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-500 transition"
          >
            Expertise
          </Link>

          <Link
            to="skills"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-500 transition"
          >
            Skills
          </Link>

          <Link
            to="experience"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-500 transition"
          >
            Experience
          </Link>

          <Link
            to="projects"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-500 transition"
          >
            Projects
          </Link>

          <Link
            to="resume"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-500 transition"
          >
            Resume
          </Link>

          <Link
            to="contact"
            smooth
            duration={500}
            className="cursor-pointer hover:text-blue-500 transition"
          >
            Contact
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-blue-500 transition"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-800">
          <div className="flex flex-col px-6 py-5 gap-5">

            <Link
              to="home"
              smooth
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              Home
            </Link>

            <Link
              to="about"
              smooth
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              About
            </Link>

            <Link
              to="expertise"
              smooth
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              Expertise
            </Link>

            <Link
              to="skills"
              smooth
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              Skills
            </Link>

            <Link
              to="experience"
              smooth
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              Experience
            </Link>

            <Link
              to="projects"
              smooth
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              Projects
            </Link>

            <Link
              to="resume"
              smooth
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              Resume
            </Link>

            <Link
              to="contact"
              smooth
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;