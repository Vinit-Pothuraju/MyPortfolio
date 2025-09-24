// pages/projects.jsx or Home.jsx

import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Adventuro - AI Travel Planner",
    subtitle: "Smart vacation planner using OpenAI",
    description:
      "An AI-powered platform that creates personalized travel itineraries using OpenAI APIs, real-time data, and user preferences.",
    tags: ["AI", "Web App", "Travel", "2024"],
    features: [
      "Personalized itineraries via OpenAI",
      "Secure JWT authentication & protected routes",
      "Real-time data via third-party APIs",
      "Reusable and modular component structure",
    ],
    deliverables: [
      "Responsive UI with Tailwind CSS",
      "Backend with Express.js + MongoDB",
      "JWT Auth Integration",
      "RESTful API endpoints",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST API",
    ],
    repoLink: "https://github.com/Vinit-Pothuraju/Adventuro",
    liveLink: "",
  },
  {
  title: "TaskMate – Task Management App",
  subtitle: "AI-powered productivity and task management platform",
  description:
    "A comprehensive productivity application to manage tasks, focus with Pomodoro sessions, set reminders, and get AI-powered daily suggestions.",
  tags: ["Productivity", "AI", "Full Stack", "2025"],
  features: [
    "Task management with categories, filters, and search",
    "Pomodoro-style focus timer with analytics",
    "Recurring and one-off reminders",
    "AI-powered daily task prioritization",
    "JWT authentication with refresh tokens",
  ],
  deliverables: [
    "Task CRUD operations with MongoDB",
    "Focus session tracking and heatmaps",
    "Reminder scheduling with node-cron",
    "AI integration via OpenAI GPT-4",
    "Responsive UI with Tailwind CSS",
  ],
  techStack: [
    "React 19 (Vite)",
    "Zustand",
    "React Query",
    "Node.js",
    "Express.js",
    "MongoDB (Mongoose)",
    "Tailwind CSS",
    "OpenAI API",
  ],
  repoLink: "https://github.com/Vinit-Pothuraju/TaskMate",
  liveLink: "",
}
, 
  {
    title: "Developer Portfolio",
    subtitle: "Personal portfolio with animation and performance",
    description:
      "Portfolio showcasing 4+ personal projects, built with Framer Motion, Tailwind, and deployed with Vercel. Optimized for performance and SEO.",
    tags: ["Portfolio", "Frontend", "Personal", "2024"],
    features: [
      "Animated UI with Framer Motion",
      "Mobile-first responsive design",
      "Perfect Lighthouse scores",
      "SEO and accessibility optimized",
    ],
    deliverables: [
      "Live portfolio website",
      "Framer Motion transitions",
      "Vercel deployment",
      "Responsive sections",
    ],
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    repoLink: "https://github.com/Vinit-Pothuraju/portfolio",
    liveLink: "https://my-portfolio-lilac-chi-13.vercel.app/",
  },
];

const fadeInFrom = (x = 0, y = 0) => ({
  hidden: { opacity: 0, x, y },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
    },
  },
  exit: { opacity: 0, x, y },
});

export default function ProjectsPage() {
  const title = "Featured Projects";
  const description =
    "Discover my latest work in web development, AI integration, and digital innovation";

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-10 overflow-x-hidden">
      <div className="w-auto flex flex-col justify-between align-middle space-y-10">

        {/* Header Section */}
        <motion.div
          className="text-center py-16 px-4 flex flex-col items-center justify-center"
          variants={fadeInFrom(0, 40)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Badge */}
          <motion.span
            className="relative mb-4 px-4 py-1 rounded-full text-sm font-medium text-white bg-blue-400/10 border border-blue-400/30 backdrop-blur-md flex items-center gap-2"
            variants={fadeInFrom(0, 20)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-blue-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            Portfolio Showcase
          </motion.span>

          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-400 to-purple-700 relative inline-block"
            variants={fadeInFrom(0, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {title}
            <motion.span
              className="block h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mt-2 mx-auto origin-center rounded-2xl"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 max-w-xl text-gray-300 text-base sm:text-lg text-center"
            variants={fadeInFrom(0, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Project Cards Section */}
        <div className="space-y-20">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={fadeInFrom(0, 40)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <ProjectCard {...proj} index={idx} />
            </motion.div>
          ))}
        </div>
        <motion.div
  className="flex justify-center"
  variants={fadeInFrom(0, 20)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  <div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-purple-500/50 bg-purple-500/5 text-sm text-white/80 shadow-md backdrop-blur-md">
    <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-purple-500 text-white text-xs font-bold">
      <span>&gt;_</span>
    </div>
    <span><a href="http:#contact" target="_blank" rel="noopener noreferrer">Interested in working together? Let’s create something amazing!</a></span>
  </div>
</motion.div>





      </div>
    </section>
  );
}
