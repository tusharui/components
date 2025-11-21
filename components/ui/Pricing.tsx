"use client";
import React, { useState, useEffect } from "react";
import { motion, animate, Variants, cubicBezier } from "framer-motion";
import { Check } from "lucide-react";

// === Type Definitions ===
interface AnimatedNumberProps {
  value: number;
}

interface PricingData {
  start: number;
  growth: number;
  enterprise: number;
}

interface Features {
  start: string[];
  growth: string[];
  enterprise: string[];
}

type PlanType = "yearly" | "monthly";

interface Tier {
  name: string;
  key: keyof Features;
  description: string;
}

// === Animated Number Counter ===
const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.8,
      ease: cubicBezier(0.19, 1, 0.22, 1), // fixed ease type
      onUpdate: (v: number) => setDisplayValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [value]);

  return <span>{displayValue}</span>;
};

// === Pricing Component ===
const Pricing: React.FC = () => {
  const [plan, setPlan] = useState<PlanType>("yearly");

  const pricing: Record<PlanType, PricingData> = {
    yearly: { start: 15, growth: 39, enterprise: 79 },
    monthly: { start: 19, growth: 49, enterprise: 99 },
  };

  const [priceData, setPriceData] = useState<PricingData>(pricing.yearly);

  useEffect(() => {
    setPriceData(pricing[plan]);
  }, [plan]);

  const features: Features = {
    start: [
      "Up to 5 wallets",
      "Basic portfolio tracking",
      "Transaction history overview",
      "Support 24/7",
    ],
    growth: [
      "Everything in Start",
      "Unlimited wallets",
      "Advanced portfolio insights",
      "Real-time tax reporting tools",
      "Multi-chain support",
      "Priority support 24/7",
    ],
    enterprise: [
      "Everything in Growth",
      "Dedicated account manager",
      "Custom blockchain integrations",
      "Enterprise-grade analytics dashboard",
      "Multi-user team access",
      "White-label platform option",
      "24/7 dedicated support",
    ],
  };

  const tiers: Tier[] = [
    {
      name: "Start",
      key: "start",
      description: "Ideal for individuals managing personal crypto finances",
    },
    {
      name: "Growth",
      key: "growth",
      description: "Perfect for growing teams and power users",
    },
    {
      name: "Enterprise",
      key: "enterprise",
      description:
        "Built for large-scale organizations with custom requirements",
    },
  ];

  // === Fixed Framer Motion Variants ===
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.96 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.4,
        duration: 1.5,
        ease: cubicBezier(0.19, 1, 0.22, 1), // corrected easing
      },
    }),
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center py-20 bg-[#f7f7f7] font-sans overflow-hidden">
      {/* === Animated Headings === */}
      <div className="text-center space-y-4 mb-14">
        <motion.h1
          className="text-8xl md:text-9xl font-extrabold text-black font-sans relative overflow-hidden"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 2, ease: cubicBezier(0.19, 1, 0.22, 1) }}
          viewport={{ once: true }}
        >
          Pricing Plans
        </motion.h1>

        <motion.p
          className="text-gray-600 text-3xl font-medium font-sans relative overflow-hidden"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: cubicBezier(0.19, 1, 0.22, 1),
          }}
          viewport={{ once: true }}
        >
          Manage, track, and optimize your digital assets
        </motion.p>

        <motion.p
          className="text-gray-600 text-3xl font-medium font-sans relative overflow-hidden"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{
            duration: 2,
            delay: 0.6,
            ease: cubicBezier(0.19, 1, 0.22, 1),
          }}
          viewport={{ once: true }}
        >
          with a plan built for your needs
        </motion.p>
      </div>

      {/* === Plan Toggle (White Neumorphic) === */}
      <div className="flex bg-white rounded-full p-2 mb-16 shadow-[6px_6px_12px_#d4d4d4,_-6px_-6px_12px_#ffffff]">
        <button
          onClick={() => setPlan("yearly")}
          className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
            plan === "yearly"
              ? "bg-white text-gray-900 shadow-inner shadow-gray-300 scale-105"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Yearly
        </button>
        <button
          onClick={() => setPlan("monthly")}
          className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
            plan === "monthly"
              ? "bg-white text-gray-900 shadow-inner shadow-gray-300 scale-105"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Monthly
        </button>
      </div>

      {/* === Pricing Cards === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.key}
            className={`rounded-3xl shadow-[4px_4px_12px_#cfcfcf,_-4px_-4px_12px_#ffffff] p-10 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-3 hover:shadow-[6px_6px_16px_#cfcfcf,_-6px_-6px_16px_#ffffff] ${
              tier.key === "growth"
                ? "bg-[#0a0a0a] text-white"
                : "bg-white text-black"
            }`}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold mb-2 capitalize">
                  {tier.name}
                </h2>
                {tier.key === "growth" && (
                  <span className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Best Choice
                  </span>
                )}
                {tier.key === "enterprise" && (
                  <span className="bg-yellow-200 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    Premium
                  </span>
                )}
              </div>

              <p
                className={`${
                  tier.key === "growth" ? "text-gray-400" : "text-gray-600"
                } mb-6`}
              >
                {tier.description}
              </p>

              <ul className="space-y-3">
                {features[tier.key].map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 border rounded-full p-0.5 ${
                        tier.key === "growth"
                          ? "text-blue-400 border-blue-400"
                          : "text-blue-600 border-blue-600"
                      }`}
                    />
                    <span
                      className={`${
                        tier.key === "growth"
                          ? "text-gray-100"
                          : "text-gray-800"
                      } font-medium`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-5xl font-semibold">
                $
                <AnimatedNumber
                  value={
                    tier.key === "start"
                      ? priceData.start
                      : tier.key === "growth"
                      ? priceData.growth
                      : priceData.enterprise
                  }
                />
              </h3>
              <p
                className={`${
                  tier.key === "growth" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                / month — {plan === "yearly" ? "billed yearly" : "billed monthly"}
              </p>

              <button
                className={`mt-5 px-6 py-3 rounded-full w-full font-medium transition-all ${
                  tier.key === "growth"
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:opacity-80"
                }`}
              >
                {tier.key === "enterprise"
                  ? "Contact Sales"
                  : tier.key === "growth"
                  ? "Manage"
                  : "Upgrade"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
