import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";

function Resume() {
  return (
    <section
      id="resume"
      className="py-20 md:py-24 bg-[#111827] text-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <FaFilePdf className="text-blue-400 text-2xl" />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Interested in my profile?
              </h2>

              <p className="text-gray-400 mt-2">
                Download my resume to learn more about my experience.
              </p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition whitespace-nowrap"
          >
            <FaDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;