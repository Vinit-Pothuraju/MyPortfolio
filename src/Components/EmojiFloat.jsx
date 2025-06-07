import React, { useMemo } from "react";

const emojis = [
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png",
    alt: "Fire",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png",
    alt: "High Voltage",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cowboy%20Hat%20Face.png",
    alt: "Cowboy Hat Face",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Winking%20Face%20with%20Tongue.png",
    alt: "Winking Face with Tongue",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/White%20Heart.png",
    alt: "heart",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Zany%20Face.png",
    alt: "Zany Face",
  },
  {
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Speak-No-Evil%20Monkey.png",
    alt: "Speak-No-Evil Monkey",
  },
];

const generateEmojiProps = () =>
  emojis.map((emoji) => ({
    ...emoji,
    left: `${Math.random() * 90}%`,
    duration: `${5 + Math.random() * 5}s`,
    delay: `${Math.random() * 3}s`,
    rotationDirection: Math.random() > 0.5 ? 1 : -1,
  }));

const EmojiFloat = () => {
  const emojiConfigs = useMemo(generateEmojiProps, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>
      <style>{`
        @keyframes floatDown {
          0% {
            transform: translateY(-150px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {emojiConfigs.map((emoji, idx) => (
        <img
          key={idx}
          src={emoji.src}
          alt={emoji.alt}
          style={{
            position: "absolute",
            top: "-150px",
            left: emoji.left,
            width: "100px",
            height: "100px",
            animation: `floatDown ${emoji.duration} linear ${emoji.delay} infinite`,
            transformOrigin: "center",
            zIndex: 0,
          }}
        />
      ))}
    </div>
  );
};

export default EmojiFloat;
