"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Feature data
const features = [
  {
    title: "Airport Travels",
    description:
      "Experience seamless, premium airport transfers designed for comfort, punctuality, and style — every trip starts and ends effortlessly.",
    icon: (
      <svg width={56} height={56} viewBox="0 0 56 56" fill="none">
        <path
          d="M42 24.5L28 17.5l-7 3.5-7-7-3.5 1.75 5.25 10.5-5.25 3.5-5.25-3.5-1.75.875 3.5 7 1.75.875h28l5.25-2.625v-5.25l-10.5-8.75z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "On-Demand Rides",
    description:
      "Request a ride anytime, anywhere — our premium fleet and professional drivers ensure comfort, reliability, and safety on demand.",
    icon: (
      <svg width={56} height={56} viewBox="0 0 56 56" fill="none">
        <rect x="8" y="18" width="40" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="18" cy="38" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="38" cy="38" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M14 22l3.5-3.5h21L42 22M12 28h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Corporate Mobility",
    description:
      "Tailored transport solutions for businesses — dedicated routes, executive rides, and complete mobility management for your teams.",
    icon: (
      <svg width={56} height={56} viewBox="0 0 56 56" fill="none">
        <rect x="10" y="12" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="15" y="17" width="26" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="15" y="28" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="30" y="28" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-32 px-6 sm:px-8" ref={ref}>
      <div className="max-w-[1320px] mx-auto">
        {/* Horizontal line before the section */}
        <motion.div
          className="mb-12 h-px bg-neutral-300 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        />

        {/* Heading */}
        <motion.h2
          className="text-neutral-900 font-semibold text-left max-w-4xl mb-20"
          style={{ lineHeight: 1.15 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="block text-4xl sm:text-4xl lg:text-4xl">
            Choose Your Experience
          </span>
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative bg-white border border-[#1f4b68] hover:border-[#1f4b68] transition-all duration-500 rounded-md"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
            >
              {/* Minimal corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#1f4b68] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#1f4b68] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-12 flex flex-col min-h-[520px]">
                {/* Icon */}
                <div className="mb-8 text-neutral-900 transform group-hover:scale-105 transition-transform duration-500">
                  {item.icon}
                </div>

                {/* Number */}
                <div
                  className="mb-6 text-7xl group-hover:text-neutral-300 transition-colors duration-500 font-bold"
                  style={{ color: '#156082' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="mb-5 text-3xl text-neutral-900 leading-tight font-semibold">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-px bg-neutral-300 mb-6" />

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed text-lg flex-grow font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
