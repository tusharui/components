"use client";
import React, { useState } from "react";

const users = [
  { name: "Ava Martin", role: "Designer" },
  { name: "Leo Carter", role: "Engineer" },
  { name: "Maya Patel", role: "Product Manager" },
  { name: "Noah Kim", role: "Engineer" },
  { name: "Zoe Li", role: "Designer" },
];

export default function UserSearch() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");

  const filtered = users.filter(
    (u) =>
      (role === "All" || u.role === role) &&
      u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        User Directory
      </h1>

      {/* Search + Filter Controls */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 transition"
        >
          <option>All</option>
          <option>Designer</option>
          <option>Engineer</option>
          <option>Product Manager</option>
        </select>
      </div>

      {/* Filtered Results */}
      <ul className="space-y-2">
        {filtered.length > 0 ? (
          filtered.map((user) => (
            <li
              key={user.name}
              className="border rounded-lg px-4 py-2 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-800">{user.name}</span>
              <span className="text-sm text-gray-500">{user.role}</span>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">
            No matching users found
          </p>
        )}
      </ul>
    </div>
  );
}
