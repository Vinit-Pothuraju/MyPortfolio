// components/Certifications.jsx

import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const certs = [
  {
    title: "Mastering Java Programming",
    provider: "Abdul Bari",
    platform: "Udemy",
    issued: "June 2024",
    skills: ["Java", "OOP", "Data Structures", "Problem Solving"],
    id: "JAVA-UD-ABDULBARI-2024",
    viewLink: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Udemy_logo.svg"
  }
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="certifications"
      className="py-20 px-4 flex flex-col items-center justify-center min-h-screen text-center"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={headerVariants}
        className="mb-12"
      >
        <span className="inline-block mb-2 px-4 py-1 text-sm text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-md">
          Professional Credentials
        </span>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">
          Certifications
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Professional certifications and credentials that validate my expertise in
          modern technologies and development practices.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="w-full max-w-sm mx-auto rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur-md shadow-md hover:shadow-lg transition duration-300"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-4">
              <img src={cert.logo} alt="Logo" className="w-20 h-auto" />
              <div className="flex items-center gap-1 text-sm text-blue-400 font-medium">
                <BadgeCheck className="w-4 h-4" />
                Verified
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>

            {/* Details */}
            <div className="mt-4 space-y-1 text-sm text-gray-300 text-left">
              <p>
                <strong>Provider:</strong>{" "}
                <span className="text-white">{cert.provider}</span>
              </p>
              <p>
                <strong>Platform:</strong>{" "}
                <span className="text-blue-400">{cert.platform}</span>
              </p>
              <p>
                <strong>Issued:</strong> {cert.issued}
              </p>
            </div>

            {/* Skills */}
            <div className="mt-5 text-left">
              <p className="text-sm text-orange-300 font-semibold mb-2">
                ⭐ Skills Validated
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 text-white text-xs rounded-full border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-between items-center border-t border-white/10 pt-4 text-sm text-white/60">
              <span>ID: {cert.id}</span>
              <a
                href={cert.viewLink}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs font-semibold transition"
              >
                View
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
