import { motion } from "framer-motion";
import {
  FaServer,
  FaDatabase,
  FaLock,
  FaBolt,
  FaProjectDiagram,
  FaCode,
} from "react-icons/fa";

function Expertise() {
  const expertise = [
    {
      icon: FaServer,
      title: "REST API Development",
      description:
        "Designing secure, scalable and maintainable REST APIs using Node.js, NestJS and Express.",
    },
    {
      icon: FaProjectDiagram,
      title: "Microservices",
      description:
        "Building modular microservices and designing communication between services using HTTP and Kafka.",
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description:
        "Working with MongoDB and PostgreSQL for schema design, aggregation, indexing and efficient queries.",
    },
    {
      icon: FaBolt,
      title: "Event-Driven Systems",
      description:
        "Implementing asynchronous communication and event-driven workflows using Apache Kafka and Redis.",
    },
    {
      icon: FaLock,
      title: "Authentication & Security",
      description:
        "Implementing JWT authentication, role-based authorization, password hashing and secure APIs.",
    },
    {
      icon: FaCode,
      title: "Performance & Scalability",
      description:
        "Building backend systems with caching, optimized queries and scalable service architectures.",
    },
  ];

  return (
    <section
      id="expertise"
      className="py-20 md:py-24 bg-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Backend Expertise
          </h2>

          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Areas I focus on when designing and developing backend systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 md:p-7 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-3">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Expertise;