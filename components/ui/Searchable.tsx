"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // modern icon

const faqs = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It lets you create reusable, dynamic UI components that make apps fast and interactive.",
  },
  {
    question: "What is a component?",
    answer:
      "A component is a self-contained piece of the UI that manages its own structure, style, and behavior. Think of it as a reusable building block.",
  },
  {
    question: "What is useState?",
    answer:
      "useState is a React Hook that lets you add state variables to functional components, allowing your UI to respond to user interactions.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 px-6">
      {/* Gradient header */}
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-gray-500 mt-3 mb-8">
        Everything you need to know about this project.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`border rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
              openIndex === index
                ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-400 shadow-md"
                : "bg-white hover:shadow-sm border-gray-200"
            }`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h2>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-3 text-gray-600 leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
