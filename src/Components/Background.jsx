import { motion } from "framer-motion";

// Utility to generate random motion configs
const bubbleMotion = (x = 0, y = -20, duration = 6) => ({
  animate: { x: [0, x, 0], y: [0, y, 0] },
  transition: {
    repeat: Infinity,
    repeatType: "mirror",
    duration,
    ease: "easeInOut",
  },
});

// Generate 30 random stars
const stars = Array.from({ length: 30 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: `${Math.random() * 4 + 1}px`,
  delay: Math.random() * 2,
}));

const bubbles = [
  { left: "10%", top: "20%", size: "w-3 h-3", x: 5, y: -25, dur: 8 },
  { left: "30%", top: "70%", size: "w-2 h-2", x: -10, y: -15, dur: 5 },
  { left: "50%", top: "50%", size: "w-4 h-4", x: 15, y: -30, dur: 7 },
  { left: "70%", top: "40%", size: "w-1.5 h-1.5", x: -20, y: -10, dur: 6 },
  { left: "80%", top: "85%", size: "w-2 h-2", x: 8, y: -35, dur: 9 },
  { left: "25%", top: "15%", size: "w-2.5 h-2.5", x: -6, y: -20, dur: 4 },
  { left: "60%", top: "10%", size: "w-3.5 h-3.5", x: 10, y: -18, dur: 5 },
];

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark nebula base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />

      {/* Nebula blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-full blur-3xl"
        {...bubbleMotion(10, -60, 12)}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-indigo-800/25 to-blue-900/25 rounded-full blur-2xl"
        {...bubbleMotion(-15, -50, 10)}
      />

      {/* Floating bubbles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute ${b.size} bg-indigo-600/40 rounded-full`}
          style={{ left: b.left, top: b.top }}
          {...bubbleMotion(b.x, b.y, b.dur)}
        />
      ))}

      {/* Stars (twinkling) */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            width: s.size,
            height: s.size,
            left: s.left,
            top: s.top,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50" />
    </div>
  );
};

export default Background;
