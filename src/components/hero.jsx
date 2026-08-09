import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex items-center bg-[#0f172a] text-white pt-24 pb-12"
>
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p className="text-blue-500 text-lg font-medium mb-3">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Rekapalli Teja
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mt-4 font-medium">
  <TypeAnimation
    sequence={[
      "Node.js Backend Developer",
      2000,
      "NestJS Developer",
      2000,
      "Microservices Developer",
      2000,
      "Backend Engineer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>

            <p className="text-gray-400 text-base sm:text-lg leading-7 mt-6 max-w-xl">
              Passionate Backend Developer specializing in scalable REST APIs,
              Microservices, MongoDB, PostgreSQL, Redis, Kafka, Docker,
              and distributed systems.
            </p>

            {/* Resume */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-7">
              <a
                href="https://github.com/tejarekapalli"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-blue-500 transition"
              >
                <FaGithub size={30} />
              </a>

              <a
                href="https://www.linkedin.com/in/teja-rekapalli-1b2555341/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-blue-500 transition"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

              <img
  src={profile}
  alt="Rekapalli Teja"
  className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
/>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;