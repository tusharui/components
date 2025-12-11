import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from '@hugeicons/react' 
import { BubbleChatIcon } from '@hugeicons/core-free-icons'

const Notifications: React.FC = () => {
  const [show, setShow] = useState(false);
  const [queue, setQueue] = useState<number[]>([]);

  const notifications = [
    { title: "New comment", msg: "Ava: \"Love this shot\"" },
    { title: "Reminder", msg: "Standup in 15 min" },
    { title: "Build complete", msg: "v1.4.3 deployed" },
    { title: "Mention", msg: "@you in #design" }
  ];

  const trigger = () => {
    if (show) return;
    setShow(true);

    notifications.forEach((_, i) => {
      setTimeout(() => {
        setQueue((p) => [...p, i]);
      }, i * 400);
    });

    setTimeout(() => {
      setQueue([]);
      setShow(false);
    }, 4000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        onClick={trigger}
        className="relative flex items-center justify-center w-24 h-24 bg-black rounded-full cursor-pointer transition-all duration-300"
      >
        {/* Bell Icon */}
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405C18.21 15.21 18 14.702 18 14.172V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.172c0 .53-.21 1.038-.595 1.423L4 17h5m6 0v1a3 3 0 11-6 0v-1h6z"
          />
        </svg>
      </div>

      {/* Toast Container */}
      <div className="fixed top-6 right-6 space-y-3 z-50">
        <AnimatePresence>
          {queue.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white shadow-xl rounded-2xl px-5 py-3 border border-gray-200 w-72 text-gray-900"
            >
              <div className="flex items-center gap-3">
                {/* Icon for first card */}
                {i === 0 && (
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <HugeiconsIcon icon={BubbleChatIcon} className="text-blue-600 w-5 h-5" />
                  </div>
                )}
                <div className="font-semibold">{notifications[i].title}</div>
              </div>
              <div className="text-sm text-gray-600">{notifications[i].msg}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Notifications;
 