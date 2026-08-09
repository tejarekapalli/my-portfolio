function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#111827] text-white"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          About Me
        </h2>

        <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 mb-10"></div>

        <div className="text-gray-400 text-lg leading-8">
          <p>
            I'm{" "}
            <span className="font-semibold text-white">
              Rekapalli Teja
            </span>
            , a Backend Developer with 2+ years of experience building
            scalable microservices and REST APIs using Node.js and NestJS.
          </p>

          <p className="mt-6">
            I specialize in designing secure, high-performance backend
            systems using MongoDB, PostgreSQL, Redis, Apache Kafka, Docker,
            and WebSockets. I enjoy solving complex backend challenges and
            building distributed systems that can scale.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;