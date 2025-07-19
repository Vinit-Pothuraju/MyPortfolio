import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Utility for bouncing blobs
const bounceMotion = (y = -30, duration = 10) => ({
  animate: { y: [0, y, 0] },
  transition: {
    repeat: Infinity,
    duration,
    ease: "easeInOut",
  },
});

// Utility for zigzag float
const zigzagFloat = (x = 40, y = 200, scale = 1, duration = 6) => ({
  animate: {
    x: [0, x, -x, 0],
    y: [-10, -y],
    scale: [scale * 0.9, scale, scale * 0.9],
    opacity: [0, 1, 0.8, 0],
  },
  transition: {
    repeat: Infinity,
    duration,
    ease: "easeInOut",
    delay: Math.random() * 2,
  },
});

// Large background blur blobs
const largeBubbles = [
  {
    className:
      "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-full blur-3xl",
    motion: bounceMotion(60, 12),
  },
  {
    className:
      "absolute top-3/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-indigo-800/25 to-blue-900/25 rounded-full blur-2xl",
    motion: bounceMotion(50, 10),
  },
];

// Zigzag colorful bubbles
const sBubbles = Array.from({ length: 14 }, () => ({
  left: `${Math.random() * 100}%`,
  bottom: 0,
  size: `${Math.random() * 6 + 3}px`,
  x: Math.random() * 40 + 10,
  y: Math.random() * 200 + 150,
  dur: 5 + Math.random() * 3,
  gradient:
    [
      "from-pink-400 to-red-500",
      "from-blue-400 to-cyan-500",
      "from-green-400 to-lime-500",
      "from-yellow-400 to-orange-500",
      "from-purple-400 to-fuchsia-500",
    ][Math.floor(Math.random() * 5)],
}));

// Small white bubbles floating upward
const xsBubbles = Array.from({ length: 15 }, () => ({
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 2 + 1}px`,
  delay: Math.random() * 2,
  dur: 4 + Math.random() * 3,
}));

// Stars twinkling in the background
const stars = Array.from({ length: 30 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: `${Math.random() * 4 + 1}px`,
  delay: Math.random() * 2,
}));

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10  overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 dark:bg-amber-50 bg-gradient-to-br from-gray-950 via-black to-gray-900" />

      {/* Large gradient blur blobs */}
      {largeBubbles.map((b, i) => (
        <motion.div key={i} className={b.className} {...b.motion} />
      ))}

      {/* Colorful zigzag bubbles */}
      {sBubbles.map((b, i) => (
        <motion.div
          key={`s-${i}`}
          className={`absolute rounded-full opacity-70 bg-gradient-to-r ${b.gradient}`}
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: 0,
          }}
          {...zigzagFloat(b.x, b.y, 1, b.dur)}
        />
      ))}

      {/* Small white floating bubbles */}
      {xsBubbles.map((b, i) => (
        <motion.div
          key={`xs-${i}`}
          className="absolute rounded-full bg-white opacity-60"
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

      {/* Stars twinkling */}
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
