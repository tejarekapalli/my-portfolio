import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#111827] text-white"
    >
      <div className="max-w-5xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience
          </h2>

          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>

          <p className="text-gray-400 mt-5">
            My professional experience in backend development.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative border-l-2 border-blue-500 pl-8"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#111827]"></div>

          <div className="bg-[#1e293b] border border-gray-700 rounded-2xl p-7 hover:border-blue-500 transition">

            <div className="flex items-start gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <FaBriefcase className="text-blue-400 text-xl" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Backend Developer
                </h3>

                <p className="text-blue-400 mt-1">
                  United New Digital Media
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  2022 – 2025
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-7 mt-6">
              Worked on scalable backend applications and microservices,
              developing REST APIs and implementing business logic for
              property management, bookings, promotions, deals, and
              user-related services.
            </p>

            <ul className="mt-5 space-y-3 text-gray-300">
              <li>
                <span className="text-blue-500 mr-2">▹</span>
                Developed backend services using Node.js and NestJS.
              </li>

              <li>
                <span className="text-blue-500 mr-2">▹</span>
                Designed and implemented REST APIs for multiple
                microservices.
              </li>

              <li>
                <span className="text-blue-500 mr-2">▹</span>
                Worked with MongoDB, PostgreSQL, Redis and Kafka.
              </li>

              <li>
                <span className="text-blue-500 mr-2">▹</span>
                Implemented authentication and authorization using
                JWT and role-based permissions.
              </li>

              <li>
                <span className="text-blue-500 mr-2">▹</span>
                Worked with Docker and Git-based development workflows.
              </li>
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-7">
              {[
                "Node.js",
                "NestJS",
                "MongoDB",
                "PostgreSQL",
                "Redis",
                "Kafka",
                "Docker",
                "REST APIs",
              ].map((technology) => (
                <span
                  key={technology}
                  className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full"
                >
                  {technology}
                </span>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;