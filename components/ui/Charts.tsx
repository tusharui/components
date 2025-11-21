"use client";
import React, { useEffect, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function LoginUI() {
  const gradientRef = useRef<HTMLDivElement>(null);

  // 🌊 Animate gradient slowly (auto movement)
  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;

    let x = 0;
    const animate = () => {
      x += 0.2;
      const angle = 45 + 15 * Math.sin(x / 50);
      gradient.style.background = `linear-gradient(${angle}deg, #1E5128, #0b0b0b, #000000)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
      <div className="relative flex w-[900px] h-[540px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-lg">
        {/* LEFT SIDE — Animated Gradient */}
        <div className="relative flex flex-col justify-end w-1/2 p-10 text-white overflow-hidden">
          {/* Moving gradient */}
          <div
            ref={gradientRef}
            className="absolute inset-0 bg-gradient-to-br from-[#1E5128] via-black to-[#0b0b0b] transition-all duration-700 ease-in-out"
          />

          {/* Glows */}
          <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-gradient-to-br from-[#1E5128] to-green-400 rounded-full blur-[150px] opacity-60" />
          <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-gradient-to-tr from-white via-green-200 to-transparent rounded-full blur-[180px] opacity-60 mix-blend-screen" />

          {/* Mist + overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.35),rgba(255,255,255,0.1)_40%,transparent_70%)] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent mix-blend-soft-light" />

          {/* Text */}
          <div className="relative z-10 drop-shadow-xl">
            <div className="text-5xl font-bold mb-6">*</div>
            <p className="text-sm opacity-90 mb-2">Welcome back</p>
            <h2 className="text-2xl font-semibold leading-snug max-w-sm">
              Secure your digital workspace with elegance and clarity.
            </h2>
          </div>
        </div>

        {/* RIGHT SIDE — Login Form */}
        <div className="flex flex-col justify-center w-1/2 px-12">
          <div className="mb-8">
            <div className="text-2xl font-semibold mb-1 text-[#1E5128]">
              Sign in to continue
            </div>
            <p className="text-gray-500 text-sm">
              Access your workspace securely.
            </p>
          </div>

          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
            <button
              type="submit"
              className="bg-[#1E5128] hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-all shadow-lg"
            >
              Login
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6 text-center text-sm text-gray-500">
            or continue with
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition">
              <FcGoogle size={20} />
              <span>Google</span>
            </button>
            <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition">
              <FaApple size={20} />
              <span>Apple</span>
            </button>
          </div>

          {/* Signup Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="text-[#1E5128] font-medium hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
