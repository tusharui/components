import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="m-5 text-center">
      <h1 className="text-2xl mb-4 font-semibold">Count: {count}</h1>

      <div className="space-x-3">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Increase
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
