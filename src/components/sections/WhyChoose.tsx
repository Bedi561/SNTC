/* eslint-disable react/jsx-key */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// simple icons
const icons = [
  <svg width="26" height="26" fill="none" stroke="currentColor">
    <circle cx="13" cy="13" r="11" strokeWidth="2" />
  </svg>,
  <svg width="26" height="26" fill="none" stroke="currentColor">
    <circle cx="13" cy="13" r="11" strokeWidth="2" />
    <path d="M13 7v6h5" strokeWidth="2" />
  </svg>,
  <svg width="26" height="26" fill="none" stroke="currentColor">
    <rect x="5" y="10" width="16" height="10" rx="2" strokeWidth="2" />
    <path d="M5 14h16" strokeWidth="2" />
  </svg>,
];

export default function WhyChooseExactGrid() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const leftTopX = useTransform(scrollYProgress, [0, 1], [-30, 0]);
  const leftBottomX = useTransform(scrollYProgress, [0, 1], [-20, 0]);
  const rightTopX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const rightBottomX = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <section
      ref={ref}
      className="w-full flex justify-center py-24 px-4 bg-white"
    >
      <div className="w-full max-w-[1320px] grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-2 min-h-[500px]">

        {/* LEFT TOP */}
        <motion.div
          style={{ x: leftTopX }}
          className="col-span-1 md:col-start-1 md:col-span-3 md:row-start-1 flex flex-col gap-5 justify-center items-center p-8 text-center rounded-lg bg-[#1f4b68] text-white min-h-[300px] lg:min-h-[350px]"
        >
          {icons[0]}
          <div className="font-bold text-2xl uppercase tracking-wide">
            Your safety is our priority
          </div>
          <div className="text-base opacity-90">
            Geolocated rides, verified drivers, and a safety button for peace of mind.
          </div>
        </motion.div>

        {/* LEFT BOTTOM */}
        <motion.div
          style={{ x: leftBottomX }}
          className="col-span-1 md:col-start-1 md:col-span-3 md:row-start-2 flex flex-col gap-5 justify-center items-center p-8 text-center rounded-lg bg-[#f8f9fa] text-[#1f4b68] min-h-[300px] md:min-h-[350px]"
        >
          {icons[1]}
          <div className="font-bold text-2xl uppercase tracking-wide">
            The highest quality standards
          </div>
          <div className="text-base opacity-90">
            Professional drivers, modern vehicles, and full journey control via the app.
          </div>
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          style={{ y: imageY }}
          className="col-span-1 md:col-start-4 md:col-span-5 md:row-start-1 md:row-span-2 h-full w-full rounded-lg overflow-hidden max-h-[720px]"
        >
          <img
            src="8.png"
            alt="Safety Illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT TOP */}
        <motion.div
          style={{ x: rightTopX }}
          className="col-span-1 md:col-start-9 md:col-span-4 md:row-start-1 flex flex-col justify-center p-10 rounded-lg bg-[#f8f9fa] text-[#1f4b68] min-h-[300px] md:min-h-[350px]"
        >
          <h2 className="text-4xl font-bold leading-tight mb-4">
            WHY <br />
            <span className="text-black">CHOOSE US?</span>
          </h2>
          <p className="mt-2 font-medium text-[#156082]">
            Safety, reliability, and support — every trip made to keep you confident.
          </p>
        </motion.div>

        {/* RIGHT BOTTOM - wider boxes */}
        <div className="col-span-1 md:col-start-9 md:col-span-4 md:row-start-2 grid grid-cols-2 gap-2 h-full">
          <motion.div
            style={{ x: rightBottomX }}
            className="col-span-1 flex flex-col gap-4 justify-center items-center p-8 text-center rounded-lg bg-[#1f4b68] text-white min-h-[300px] md:min-h-[350px]"
          >
            {icons[2]}
            <div className="font-bold text-xl uppercase tracking-wide">
              Clear and transparent prices
            </div>
            <div className="text-base opacity-90">
              No surge fees, upfront pricing, no surprises.
            </div>
          </motion.div>

          <motion.div
            style={{ x: rightBottomX }}
            className="col-span-1 flex flex-col gap-4 justify-center items-center p-8 text-center rounded-lg bg-[#156082] text-white min-h-[300px] md:min-h-[350px]"
          >
            {icons[0]}
            <div className="font-bold text-xl uppercase tracking-wide">
              We&apos;re Here for You
            </div>
            <div className="text-base opacity-90">
              Our support team is ready anytime you need us.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
