import React from "react";

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

// Generate random values for left position and animation delay/duration to make it natural
const randomLeft = () => `${Math.random() * 90}%`;
const randomDuration = () => 5 + Math.random() * 5; // 5-10 seconds
const randomDelay = () => Math.random() * 5; // 0-5 seconds

const EmojiFloat = () => {
  return (
    <>
      <style>{`
        @keyframes fallDown {
          0% {
            transform: translateY(-100%);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
      `}</style>

      {emojis.map((emoji, idx) => (
        <img
          key={idx}
          src={emoji.src}
          alt={emoji.alt}
          style={{
            position: "absolute",
            top: "-50px", // start just above the viewport
            left: randomLeft(),
            width: "140px",
            height: "140px",
            pointerEvents: "none",
            userSelect: "none",
            animationName: "fallDown",
            animationDuration: `${randomDuration()}s`,
            animationDelay: `${randomDelay()}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
};

export default EmojiFloat;
