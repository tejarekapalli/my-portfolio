import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-[#0f172a] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            gap-6
            lg:gap-16
            py-8
            sm:py-12
            lg:py-20
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Greeting */}
            <p className="text-blue-500 text-lg sm:text-xl font-medium mb-3">
              Hello, I'm
            </p>

            {/* Name */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >
              Rekapalli Teja
            </h1>

            {/* Job Title */}
            <h2
              className="
                text-xl
                sm:text-2xl
                lg:text-3xl
                text-gray-400
                font-semibold
                mt-4
              "
            >
              Microservices Developer
            </h2>

            {/* Description */}
            <p
              className="
                text-gray-400
                text-base
                sm:text-lg
                leading-7
                sm:leading-8
                mt-5
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >
              Passionate Backend Developer specializing in scalable REST APIs,
              Microservices, MongoDB, PostgreSQL, Redis, Kafka, Docker, and
              distributed systems.
            </p>

            {/* Resume Button */}
            <div className="mt-6">
              <a
                href="/resume.pdf"
                download
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-7
                  py-3
                  rounded-lg
                  font-medium
                  transition
                  duration-300
                "
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className="
                flex
                justify-center
                lg:justify-start
                items-center
                gap-7
                mt-7
              "
            >
              <a
                href="https://github.com/tejarekapalli"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  text-gray-300
                  hover:text-blue-500
                  transition
                  duration-300
                "
              >
                <FaGithub size={34} />
              </a>

              <a
                href="https://www.linkedin.com/in/teja-rekapalli-1b2555341/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  text-gray-300
                  hover:text-blue-500
                  transition
                  duration-300
                "
              >
                <FaLinkedin size={34} />
              </a>
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="
              w-full
              lg:w-1/2
              flex
              justify-center
              mt-2
              lg:mt-0
            "
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-blue-500/10
                  blur-2xl
                  scale-110
                "
              ></div>

              {/* Profile Image */}
              <img
                src={profile}
                alt="Rekapalli Teja"
                className="
                  relative
                  w-44
                  h-44
                  sm:w-52
                  sm:h-52
                  md:w-64
                  md:h-64
                  lg:w-80
                  lg:h-80
                  rounded-full
                  object-cover
                  object-top
                  border-4
                  border-blue-500
                  shadow-xl
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;