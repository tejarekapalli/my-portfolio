import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Rentastico",
      description:
        "A property rental platform with property management, bookings, promotions, reviews, and role-based permissions.",
      features: [
        "Microservices architecture",
        "Property & booking management",
        "Kafka-based communication",
        "Role-based access control",
      ],
      technologies: ["NestJS", "MongoDB", "Kafka", "Redis"],
      github: "#",
    },

    {
      title: "TripHouse",
      description:
        "A travel-focused social platform supporting feeds, search, user interactions, travel streams, and travel-related services.",
      features: [
        "Travel social feeds",
        "Search & discovery",
        "Microservices",
        "Real-time communication",
      ],
      technologies: ["Node.js", "NestJS", "MongoDB", "Kafka"],
      github: "#",
    },

    {
      title: "LargePocket",
      description:
        "An e-commerce and deals platform supporting merchants, coupons, categories, and deal management.",
      features: [
        "Merchant management",
        "Deals & coupons",
        "Category management",
        "REST API architecture",
      ],
      technologies: ["Node.js", "MongoDB", "Redis", "Kafka", "REST APIs"],
      github: "#",
    },

    {
  title: "Presumelink",
  description:
    "A career platform where students and professionals can create professional resumes using multiple customizable designs and practice AI-powered interviews to improve their communication, confidence, and interview skills.",
  features: [
    "User registration & profile management",
    "Resume builder with multiple designs",
    "AI-powered mock interviews",
    "Interview performance & feedback",
    "Career profile management",
  ],
  technologies: ["NestJS", "MongoDB", "Redis", "REST APIs", "AI"],
  github: "#",
},

{
  title: "Pidikili",
  description:
    "A community-driven social platform that connects people seeking help with working professionals and volunteers who can provide support across areas such as legal assistance, medical guidance, blood support, and other community needs.",
  features: [
    "Invite-only user registration",
    "Community help requests",
    "Professional & volunteer connections",
    "Direct in-app communication",
    "Social contribution recognition",
    "Multi-level community administration",
  ],
  technologies: ["Node.js", "MongoDB", "Redis", "REST APIs"],
  github: "#",
},
  ];

  return (
    <section
  id="projects"
  className="py-20 md:py-24 bg-[#111827] text-white"
>
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects
          </h2>

          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Some of the backend systems and platforms I've worked on.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#1e293b] border border-gray-700 rounded-2xl p-7 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-2xl font-bold group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {project.description}
              </p>

              {/* Features */}
              <ul className="mt-5 space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-gray-300 text-sm flex gap-2"
                  >
                    <span className="text-blue-500">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-5 mt-7">

                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                >
                  <FaExternalLinkAlt size={13} />
                  Details
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;