/* eslint-disable react/jsx-key */
"use client";
import { motion, useInView } from "framer-motion";
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
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="w-full mb-24 py-12 px-2 md:px-12 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 rounded-lg overflow-hidden shadow-lg min-h-[360px]">

        {/* LEFT TOP - Your safety is our priority */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="col-span-1 md:col-start-1 md:col-span-3 md:row-start-1 flex flex-col gap-3 justify-center items-center p-6 text-center"
          style={{ backgroundColor: "#1f4b68", color: "#ffffff" }}
        >
          {icons[0]}
          <div className="font-bold text-lg uppercase tracking-wider">
            Your safety is our priority
          </div>
          <div className="text-sm opacity-90">
            With geolocated rides, verified drivers and a safety button available to take care of you during your ride.
          </div>
        </motion.div>

        {/* LEFT BOTTOM - The highest quality standards */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="col-span-1 md:col-start-1 md:col-span-3 md:row-start-2 flex flex-col gap-3 justify-center items-center p-6 text-center"
          style={{ backgroundColor: "#f8f9fa", color: "#1f4b68" }}
        >
          {icons[1]}
          <div className="font-bold text-lg uppercase tracking-wider">
            The highest quality standards
          </div>
          <div className="text-sm opacity-90">
            Professional drivers, modern vehicles and the ability to control your journey preferences via the app. At last, you&apos;ll travel as you deserve to.
          </div>
        </motion.div>

       <div className="col-span-1 md:col-start-4 md:col-span-5 md:row-start-1 md:row-span-2 h-full w-full">
  <img
    src="1.jpg"
    alt="Safety Illustration"
    className="w-full h-full object-cover"
  />
</div>


        {/* RIGHT TOP - Why Choose Us? */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="col-span-1 md:col-start-9 md:col-span-4 md:row-start-1 flex flex-col justify-center p-8"
          style={{ backgroundColor: "#f8f9fa", color: "#1f4b68" }}
        >
          <h2 className="text-4xl font-bold leading-tight mb-2">
            WHY <br />
            <span className="text-black">CHOOSE US?</span>
          </h2>
          <p className="mt-2 font-medium" style={{ color: "#156082" }}>
            Safety, reliability, and support — every trip made to keep you confident and comfortable.
          </p>
        </motion.div>

        {/* RIGHT BOTTOM - Clear and transparent prices + Support */}
        <div className="col-span-1 md:col-start-9 md:col-span-4 md:row-start-2 grid grid-cols-2 h-full">
          {/* Clear and transparent prices */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="flex flex-col gap-2 justify-center items-center p-6 text-center"
            style={{ backgroundColor: "#1f4b68", color: "#ffffff" }}
          >
            {icons[2]}
            <div className="font-bold text-lg uppercase tracking-wider">
              Clear and transparent prices
            </div>
            <div className="text-sm opacity-90">
No surge fees always the same price, upfront. No surprises, just your ride.
            </div>
          </motion.div>

          {/* We're here for you */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="flex flex-col gap-2 justify-center items-center p-6 text-center"
            style={{ backgroundColor: "#156082", color: "#ffffff" }}
          >
            {icons[0]}
            <div className="font-bold text-lg uppercase tracking-wider">
              We&apos;re Here for You
            </div>
            <div className="text-sm opacity-90">
              Our support team is ready to help anytime you need, we&apos;re just a message away.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
