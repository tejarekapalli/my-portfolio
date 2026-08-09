import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";
import {
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiJavascript,
} from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "NestJS", icon: SiNestjs },
        { name: "Express.js", icon: SiExpress },
        { name: "JavaScript", icon: SiJavascript },
      ],
    },
    {
      title: "Databases & Caching",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Redis", icon: SiRedis },
      ],
    },
    {
      title: "Messaging & Infrastructure",
      skills: [
        { name: "Apache Kafka", icon: SiApachekafka },
        { name: "Docker", icon: FaDocker },
        { name: "Git", icon: FaGitAlt },
      ],
    },
    {
      title: "Frontend & APIs",
      skills: [
        { name: "React", icon: FaReact },
        { name: "REST APIs", icon: null },
        { name: "Microservices", icon: null },
        { name: "WebSockets", icon: null },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical Skills
          </h2>

          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to design, build, and
            maintain scalable backend systems.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-[#111827] border border-gray-700 rounded-2xl p-7 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">

                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 bg-[#1e293b] border border-gray-700 rounded-xl px-4 py-3 hover:border-blue-500 hover:bg-[#243247] transition"
                    >
                      {Icon && (
                        <Icon
                          size={24}
                          className="text-blue-400"
                        />
                      )}

                      <span className="text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;