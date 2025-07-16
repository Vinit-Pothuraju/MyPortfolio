// components/ProjectCard.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

const typewriter = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delay: i * 0.04,
    },
  }),
};

const gradientColors = [
  "from-blue-600 to-indigo-500",
  "from-purple-600 to-fuchsia-500",
  "from-teal-500 to-emerald-400",
  "from-yellow-500 to-rose-400",
  "from-red-500 to-pink-500",
  "from-sky-500 to-blue-400",
];

const ProjectCard = ({
  title,
  subtitle,
  description,
  tags = [],
  features = [],
  deliverables = [],
  techStack = [],
  repoLink,
  liveLink,
  index = 0,
}) => {
  const gradient = gradientColors[index % gradientColors.length];

  return (
    <motion.div
      className="rounded-3xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-md text-white max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header Section */}
      <motion.div
        className={`rounded-t-3xl bg-gradient-to-br ${gradient} p-8 relative overflow-hidden`}
        variants={fadeInFromBottom}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 relative z-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/20 text-white border border-white/20 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-4xl font-bold text-white mb-2 relative z-10 flex flex-wrap">
          {title.split("").map((char, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              variants={typewriter}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              viewport={{ once: true }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>

        <p className="text-white/80 font-medium text-lg mb-4 relative z-10 flex flex-wrap">
          {subtitle.split("").map((char, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              variants={typewriter}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              viewport={{ once: true }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 relative z-10">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition font-medium flex items-center gap-2"
            >
              <FaGithub /> View Repository
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-md bg-white text-black hover:bg-gray-200 transition font-medium flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </motion.div>

      {/* Features & Deliverables */}
      <motion.div className="grid sm:grid-cols-2 gap-8 bg-[#0f172a]/20 p-6" variants={fadeInFromBottom}>
        <div>
          <h3 className="font-semibold text-lg text-purple-400 mb-2 flex items-center gap-2">
            <span className="text-2xl">⚙️</span> Key Features
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-sm text-white/80">
            {features.map((f, idx) => (
              <motion.li
                key={idx}
                className="overflow-hidden"
                variants={typewriter}
                initial="hidden"
                whileInView="visible"
                custom={idx}
                viewport={{ once: true }}
              >
                {f}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-green-400 mb-2 flex items-center gap-2">
            <span className="text-2xl">✅</span> Deliverables
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-sm text-white/80">
            {deliverables.map((d, idx) => (
              <motion.li
                key={idx}
                className="overflow-hidden"
                variants={typewriter}
                initial="hidden"
                whileInView="visible"
                custom={idx}
                viewport={{ once: true }}
              >
                {d}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div className="bg-[#0f172a]/20 p-6 pt-0" variants={fadeInFromBottom}>
        <h3 className="font-semibold text-lg text-pink-400 mb-3">🧠 Technology Stack</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/70 backdrop-blur"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
