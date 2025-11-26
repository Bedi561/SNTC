"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { plusJakartaSans } from "../../font"; // ✅ add this
import { Airplane, Car, Suitcase } from "iconoir-react";


const features = [
  {
    title: "Airport Travels",
    description:
      "Experience seamless, premium airport transfers designed for comfort, punctuality, and style — every trip starts and ends effortlessly.",
    icon: <Airplane width={56} height={56} strokeWidth={1.5} />,
  },
  {
    title: "On-Demand Rides",
    description:
      "Request a ride anytime, anywhere — our premium fleet and professional drivers ensure comfort, reliability, and safety on demand.",
    icon: <Car width={56} height={56} strokeWidth={1.5} />,
  },
  {
    title: "Corporate Mobility",
    description:
      "Tailored transport solutions for businesses — dedicated routes, executive rides, and complete mobility management for your teams.",
    icon: <Suitcase width={56} height={56} strokeWidth={1.5} />,
  },
];
export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      className={`py-32 px-6 sm:px-8 ${plusJakartaSans.className}`} // ✅ apply font here
      ref={ref}
    >
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

  {/* Number */}
  <div
    className="mb-10 text-7xl font-bold tracking-[-0.03em] text-[#156082] 
               transition-colors duration-500"
  >
    {String(i + 1).padStart(2, "0")}
  </div>

  {/* Title */}
  <h3 className="mb-4 text-3xl text-neutral-900 font-semibold leading-snug tracking-[-0.01em]">
    {item.title}
  </h3>

  {/* Divider */}
  <div className="w-14 h-[2px] bg-neutral-300/80 mb-6" />

  {/* Description */}
  <p className="text-neutral-600 text-[1.05rem] leading-relaxed font-medium tracking-[0.005em] flex-grow">
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
