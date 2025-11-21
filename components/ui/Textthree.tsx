"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Textthree = () => {
  const sentences = [
    "Track your crypto",
    "Manage your assets",
    "Grow smarter",
    "Trade with confidence",
    "Secure your wallet",
    "Analyze on-chain data",
    "Automate your strategy",
    "Discover trends",
    "Stay ahead",
    "Build your future",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-white text-black"
      style={{
        perspective: "1000px", // gives 3D depth
        overflow: "hidden",
      }}
    >
      <motion.h1
        key={index}
        initial={{
          rotateY: 90, // coming from side
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          rotateY: 0,
          opacity: 1,
          scale: 1.05, // slight zoom forward
          textShadow: "0px 0px 20px rgba(255,255,255,0.4)",
        }}
        exit={{
          rotateY: -90,
          opacity: 0,
          scale: 0.9,
        }}
        transition={{
          duration: 0.8,
          ease: [0.19, 1, 0.22, 1],
        }}
        className="text-6xl font-bold font-sans"
      >
        {sentences[index]}
      </motion.h1>
    </div>
  );
};

export default Textthree;
