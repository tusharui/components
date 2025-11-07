"use client";
import React, { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            onClick={() => setRating(index + 1)}
            className="text-4xl transition-transform hover:scale-110"
          >
            {index < rating ? "⭐" : "☆"}
          </button>
        ))}
      </div>
      <p className="mt-4 text-lg text-gray-700">Your rating: {rating} / 5</p>
    </div>
  );
}
