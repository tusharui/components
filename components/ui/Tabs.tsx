"use client";
import React, { useState } from "react";

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="max-w-lg mx-auto mt-16 p-6 bg-white shadow-md rounded-xl">
      {/* Tab buttons */}
      <div className="flex border-b mb-4">
        {["Overview", "Projects", "Contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 font-medium border-b-2 transition-all ${
              activeTab === tab
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="text-gray-700">
        {activeTab === "Overview" && <p>This is the Overview section.</p>}
        {activeTab === "Projects" && <p>Here are your recent projects.</p>}
        {activeTab === "Contact" && <p>Contact us at support@example.com</p>}
      </div>
    </div>
  );
} 