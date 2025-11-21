"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypewriterText = () => {
  const sentences = [
    "Track your crypto.",
    "Manage your assets.",
    "Grow smarter.",
    "Automate your trades.",
    "Analyze market trends.",
    "Earn with staking.",
    "Stay ahead always.",
  ];

  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // click sound on typing
  const playSound = () => {
    const audio = new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-typewriter-soft-click-1125.mp3"
    );
    audio.volume = 0.15;
    audio.play();
  };

  useEffect(() => {
    const current = sentences[index];
    const speed = deleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setDisplayed((prev) => prev + current.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
        playSound();
      } else if (deleting && charIndex > 0) {
        setDisplayed((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % sentences.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, sentences]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-center">
      <motion.h1
        className="text-5xl font-extrabold font-sans tracking-tight leading-snug text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {displayed}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1 h-10 ml-1 align-middle"
          style={{
            backgroundColor: deleting ? "#ef4444" : "#000000", // black when typing, red when deleting
          }}
        />
      </motion.h1>
    </div>
  );
};

export default TypewriterText;
