/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { amount: 0.2, once: true });

  return (
    <motion.footer
      ref={footerRef}
      className="bg-[#156082] w-full relative pb-20 sm:pb-24 lg:pb-52 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-5 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          {/* Left Section - Join Community */}
          <div className="flex flex-col items-start max-w-md">
            <img src="wwe.png" alt="Kruze" className="h-16 sm:h-20 mb-1 md:mb-2 -ml-3" />
            <p className="text-[#c9c5b8] text-sm leading-relaxed">
              Experience the difference of a ride that&apos;s big on care, comfort, and attention to every detail.
            </p>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="flex flex-wrap gap-12 sm:gap-16 lg:gap-20">
            {/* Follow Column */}
            <div>
              <h4 className="text-[#8a8778] text-xs font-bold uppercase tracking-wider mb-4">
                FOLLOW
              </h4>
              <ul className="space-y-2 text-[#c9c5b8]">
                <li>
                  <a href="#instagram" className="hover:text-white transition font-bold">
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a href="#facebook" className="hover:text-white transition font-bold">
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a href="#twitter" className="hover:text-white transition font-bold">
                    X (TWITTER)
                  </a>
                </li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h4 className="text-[#8a8778] text-xs font-bold uppercase tracking-wider mb-4">
                ABOUT
              </h4>
              <ul className="space-y-2 text-[#c9c5b8]">
                <li>
                  <a href="#what-is-go-rving" className="hover:text-white transition font-bold">
                    OUR WAY
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition font-bold">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background Logo Image */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <img
    src="wwe.png"
    alt="Kruze Background"
    className="opacity-10 object-fit select-none"
    style={{
      width: '2000px',       // Hard width
      height: 'auto',        // Keep aspect ratio
      paddingTop: '12rem',   // Top spacing
    }}
  />
</div>

    </motion.footer>
  );
}
