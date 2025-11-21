"use client";
import React, { useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const increase = () => {
    setProgress((prev) => Math.min(prev + 3, 100)); // cap at 100%
  };

  const reset = () => setProgress(0);

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-xl font-mono font-medium text-center mb-4">Progress Bar</h1>

      {/* Progress bar container */}
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-center text-gray-600 mb-4">{progress}% Complete</p>

      <div className="flex justify-center gap-3">
        <button
          onClick={increase}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Increase
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
 