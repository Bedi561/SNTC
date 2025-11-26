"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { CometImage } from "@/components/ui/comet-card";
import SlideArrowButton from "@/components/ui/slide-arrow-button";
import { plusJakartaSans } from "../../font"; // ✅ ADD THIS

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  /** ANIMATIONS **/
  const containerStagger: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fade: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section
      ref={ref}
      className={`w-full h-auto overflow-hidden pt-20 pb-10 mt-20 ${plusJakartaSans.className}`} // ✅ APPLY FONT HERE
    >
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT IMAGE USING COMET CARD */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative w-full h-auto flex items-center justify-center px-10 lg:px-12"
        >
          {/* Gradient Glow Behind Card */}
          <div
            className="absolute rounded-[40px] blur-3xl opacity-30 
            bg-gradient-to-br from-[#1f4b68] via-[#156082] to-[#1a7ba3]"
          />

          {/* Comet Card */}
          <CometImage src="/9.png" width="350px" height="500px" />
        </motion.div>

        {/* RIGHT CONTENT (STAGGERED ANIMATION) */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col justify-center px-16 py-6 lg:px-24 h-auto space-y-6"
        >
          {/* Headline 1 */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-5xl lg:text-6xl leading-snug text-black"
          >
            You define the <span className="font-semibold">destination</span>.
          </motion.h1>

          {/* Headline 2 */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-5xl lg:text-6xl leading-snug text-black"
          >
            We deliver the <span className="font-semibold">experience</span>.
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-black/70 max-w-xl leading-relaxed"
          >
            We elevate everyday travel with comfort, clarity, and attention to
            detail. From start to finish, your experience is designed to feel
            seamless, premium, and reassuringly consistent.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div variants={fadeUp}>
            <SlideArrowButton text="Get the App" primaryColor="#000000" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
