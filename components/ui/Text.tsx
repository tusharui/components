"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Text = () => {
  const sentences = [
    "Track your crypto",
    "Manage your assets",
    "Grow smarter",
    "Secure everything",
    "Automate profits",
    "Analyze deeply",
    "Scale infinitely",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // delay between letters
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  const letter = {
    hidden: { rotateX: 90, y: 10, opacity: 0 },
    visible: {
      rotateX: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex gap-2 text-6xl font-bold font-sans"
        >
          {sentences[index].split("").map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Text;
