/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { amount: 0.2, once: true });

  return (
    <motion.footer
      ref={footerRef}
      className="w-full relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-20">

          {/* Brand Section */}
          <div className="max-w-sm">
            <Image
              src="/w.png"
              alt="Kruze"
              width={200}
              height={120}
              className="h-17 w-auto -ml-3 object-contain"
              priority
            />

            <p className="text-[#000000] text-sm leading-relaxed mt-4 max-w-xs">
              Premium mobility, elevated with care, comfort, and attention to detail—every ride, every time.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-16 sm:gap-20 lg:gap-28">

            {/* Follow */}
            <div className="min-w-[120px]">
              <h4 className="text-[#000000] text-[11px] font-semibold uppercase tracking-wide mb-5">
                Follow
              </h4>

              <ul className="space-y-3 text-[#000000] text-sm">
                <li>
                  <a className="hover:text-white transition font-medium" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition font-medium" href="#">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition font-medium" href="#">
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="min-w-[120px]">
              <h4 className="text-[#000000] text-[11px] font-semibold uppercase tracking-wide mb-5">
                About
              </h4>

              <ul className="space-y-3 text-[#000000] text-sm">
                <li>
                  <a className="hover:text-white transition font-medium" href="#">
                    Our Way
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition font-medium" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-14" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[#000000] text-xs gap-4">
          <p>© {new Date().getFullYear()} Kruze Mobility. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className=" transition">Terms</a>
            <a href="#" className="transition">Privacy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
