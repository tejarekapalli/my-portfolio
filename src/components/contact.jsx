import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "aeb7451a-4868-4dec-8b7a-b269ab7577f8"
    );

    formData.append(
      "subject",
      "New Portfolio Contact Message"
    );

    const data = Object.fromEntries(formData);
    const json = JSON.stringify(data);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }
      );

      const result = await response.json();

      console.log("Web3Forms:", result);

      if (result.success) {
        setStatus("Message sent successfully! 🚀");
        event.target.reset();
      } else {
        setStatus(
          result.message || "Something went wrong."
        );
      }
    } catch (error) {
      console.error("Request error:", error);

      setStatus(
        "Unable to connect to Web3Forms."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-24 bg-[#0f172a] text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>

          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            I'm currently open to backend development opportunities.
            Feel free to reach out if you'd like to discuss a project,
            opportunity, or collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-700 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold">
              Let's Connect
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Whether you have a job opportunity, project idea, or
              simply want to connect, you can reach me through the
              links below.
            </p>

            <div className="mt-8 space-y-5">

              <a
                href="mailto:rekapalliteja1@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-500 transition break-all"
              >
                <FaEnvelope size={22} />

                <span>
                  rekapalliteja1@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/tejarekapalli"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-500 transition"
              >
                <FaGithub size={22} />

                <span>
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/teja-rekapalli-1b2555341/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-500 transition"
              >
                <FaLinkedin size={22} />

                <span>
                  LinkedIn
                </span>
              </a>

            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-700 rounded-2xl p-6 md:p-8"
          >
            <div>
              <label className="block text-gray-300 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="mt-5">
              <label className="block text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="mt-5">
              <label className="block text-gray-300 mb-2">
                Message
              </label>

              <textarea
                name="message"
                required
                rows="5"
                placeholder="Your message..."
                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 py-3 rounded-lg font-medium transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-blue-400 mt-4">
                {status}
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;