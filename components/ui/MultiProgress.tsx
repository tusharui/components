import React from "react";
import { Mail, Trash2, ArrowUpCircle } from "lucide-react";

const MultiProgress = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-3xl shadow-sm p-10 w-[420px] text-center border border-gray-100">
        {/* Envelope Illustration */}
        <div className="relative flex justify-center mb-8">
          {/* Envelope body */}
          <div className="w-32 h-20 bg-gray-200 rounded-b-lg relative overflow-hidden">
            {/* Paper inside */}
            <div className="absolute -top-6 left-0 right-0 mx-auto w-28 h-12 bg-white rounded-t-md shadow-inner" />
          </div>

          {/* Envelope flap */}
          <div
            className="absolute top-4 w-32 h-16 bg-gray-300"
            style={{
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            }}
          />

          {/* Notification badge */}
          <div className="absolute -top-3 right-16 bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
            !!!
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Your mail is full!
        </h2>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          Your inbox is full of mail! Clear up space by deleting files or
          upgrade your storage.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button className="flex items-center gap-2 bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-200 transition">
            <ArrowUpCircle className="w-4 h-4" />
            Upgrade mail
          </button>

          <button className="flex items-center gap-2 bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            <Trash2 className="w-4 h-4" />
            Clear space
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiProgress;
