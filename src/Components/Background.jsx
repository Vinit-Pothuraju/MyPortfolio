import { motion } from "framer-motion";

// Utility to generate motion
const floatUp = (y = -100, duration = 6) => ({
  animate: { y: [0, y] },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    duration,
    ease: "easeInOut",
  },
});

const zigzagMotion = (x = 50, duration = 8) => ({
  animate: { x: [0, x, -x, 0] },
  transition: {
    repeat: Infinity,
    duration,
    ease: "easeInOut",
  },
});

const bounceMotion = (y = -30, duration = 10) => ({
  animate: { y: [0, y, 0] },
  transition: {
    repeat: Infinity,
    duration,
    ease: "easeInOut",
  },
});

// Small white bubbles (float up from bottom)
const xsBubbles = Array.from({ length: 15 }, () => ({
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  delay: Math.random() * 2,
  dur: 4 + Math.random() * 3,
}));

// Small gradient bubbles on top (zigzag)
const sBubbles = Array.from({ length: 10 }, () => ({
  left: `${Math.random() * 100}%`,
  top: "0%",
  size: `${Math.random() * 3 + 2}px`,
  x: Math.random() * 30 + 10,
  dur: 6 + Math.random() * 3,
}));

// Large gradient blur bubbles (floating)
const largeBubbles = [
  {
    className:
      "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-full blur-3xl",
    motion: bounceMotion(60, 12),
  },
  {
    className:
      "absolute top-3/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-indigo-800/25 to-blue-900/25 rounded-full blur-2xl",
    motion: bounceMotion(50, 10),
  },
];

// Stars
const stars = Array.from({ length: 30 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: `${Math.random() * 4 + 1}px`,
  delay: Math.random() * 2,
}));

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark nebula base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />

      {/* Large floating gradient blobs */}
      {largeBubbles.map((b, i) => (
        <motion.div key={i} className={b.className} {...b.motion} />
      ))}

      {/* Small white bubbles (bottom to top) */}
      {xsBubbles.map((b, i) => (
        <motion.div
          key={`xs-${i}`}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: 0,
          }}
          animate={{ y: [-10, -200] }}
          transition={{
            repeat: Infinity,
            duration: b.dur,
            delay: b.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Small gradient bubbles on top (zigzag movement) */}
      {sBubbles.map((b, i) => (
        <motion.div
          key={`s-${i}`}
          className="absolute bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
          }}
          {...zigzagMotion(b.x, b.dur)}
        />
      ))}

      {/* Stars (twinkling) */}
      {stars.map((s, i) => (
        <motion.div
          key={`star-${i}`}
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

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50" />
    </div>
  );
};

export default Background;
