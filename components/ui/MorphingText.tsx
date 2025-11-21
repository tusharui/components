"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MorphingText = () => {
  const words = ["Create", "Innovate", "Dominate"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          className="text-6xl font-extrabold font-sans"
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.8, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1, letterSpacing: "0em" }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1, letterSpacing: "-0.2em" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.8, 0.25, 1],
          }}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default MorphingText;
