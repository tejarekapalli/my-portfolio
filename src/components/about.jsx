import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-[#0f172a] text-white"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-5"></div>
        </motion.div>

        {/* Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <p
            className="
              text-gray-300
              text-lg
              sm:text-xl
              leading-10
              text-justify
            "
          >
            I'm{" "}
            <span className="font-semibold text-white">
              Rekapalli Teja
            </span>
            , a Backend Developer with 2+ years of experience building
            scalable microservices and REST APIs using Node.js and NestJS.
          </p>

          <p
            className="
              text-gray-300
              text-lg
              sm:text-xl
              leading-10
              mt-8
              text-justify
            "
          >
            I specialize in designing secure, high-performance backend systems
            using MongoDB, PostgreSQL, Redis, Apache Kafka, Docker, and
            WebSockets. I enjoy solving complex backend challenges and building
            scalable distributed systems.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;