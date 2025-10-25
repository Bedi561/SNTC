"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const features = [
  {
    title: "Airport Travels",
    description:
      "Experience seamless, premium airport transfers designed for comfort, punctuality, and style — every trip starts and ends effortlessly.",
    icon: (
      <svg width={48} height={48} fill="none">
        <circle cx="24" cy="24" r="22" fill="#156082" />
        <path
          d="M12 28l8-4 10 8 4-2-8-10 4-2 12 10v4l-4 2H12z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    title: "On-Demand Rides",
    description:
      "Request a ride anytime, anywhere — our premium fleet and professional drivers ensure comfort, reliability, and safety on demand.",
    icon: (
      <svg width={48} height={48} fill="none">
        <rect x="6" y="14" width="36" height="20" rx="6" fill="#1f4b68" />
        <circle cx="16" cy="32" r="3" fill="#fff" />
        <circle cx="32" cy="32" r="3" fill="#fff" />
        <path d="M14 20h20v2H14z" fill="#E9DBB6" />
      </svg>
    ),
  },
  {
    title: "Corporate Mobility",
    description:
      "Tailored transport solutions for businesses — dedicated routes, executive rides, and complete mobility management for your teams.",
    icon: (
      <svg width={48} height={48} fill="none">
        <rect x="8" y="10" width="32" height="28" rx="4" fill="#1f4b68" />
        <rect x="12" y="14" width="24" height="6" rx="2" fill="#fff" />
        <rect x="12" y="24" width="10" height="10" rx="2" fill="#fff" />
        <rect x="26" y="24" width="10" height="10" rx="2" fill="#fff" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.72, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-24 px-6 sm:py-32 sm:px-8 bg-white" ref={ref}>
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-28 md:mb-32">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f4b68] leading-snug"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.72, ease: "easeOut" }}
          >
            Premium Mobility <br /> for Every Journey
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-[#156082] font-medium flex items-center leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            From luxury airport transfers to on-demand rides and corporate
            travel our premium fleet and service redefine how you move.
          </motion.p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-3xl border border-[#f3f0ff] shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 p-10 sm:p-12 flex flex-col items-center text-center min-h-[300px] sm:min-h-[320px]"
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <div className="mb-6 sm:mb-8">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1f4b68] mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#156082] leading-relaxed max-w-[280px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
