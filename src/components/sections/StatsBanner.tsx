"use client";

import { motion } from "framer-motion";
// import { Apple, Play } from "lucide-react"; // icons (lightweight + premium)

export default function StatsBanner() {
  return (
    <section className="relative w-full py-28 overflow-hidden bg-[#1f4b68]">

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-white/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold tracking-[-0.02em] text-white mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Ready to Kruze?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          Your premium mobility companion — travel smarter, smoother, and in style.
          Download the app and start your journey today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >

          {/* iOS Button */}
          <a
            href="#"
            className="
              flex items-center gap-3 
              bg-white text-black 
              hover:bg-neutral-200 
              transition-all duration-300
              px-6 py-3 rounded-xl 
              shadow-[0_0_20px_rgba(255,255,255,0.15)]
            "
          >
            {/* <Apple className="w-6 h-6" /> */}
            <span className="font-semibold tracking-tight">
              Download for iOS
            </span>
          </a>

          {/* Android Button */}
          <a
            href="#"
            className="
              flex items-center gap-3 
              bg-[#34A853] text-white 
              hover:bg-[#2e9349] 
              transition-all duration-300
              px-6 py-3 rounded-xl 
              shadow-[0_0_20px_rgba(52,168,83,0.35)]
            "
          >
            {/* <Play className="w-6 h-6" /> */}
            <span className="font-semibold tracking-tight">
              Download for Android
            </span>
          </a>

        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/20 rounded-full"
          style={{
            width: Math.random() * 5 + 2,
            height: Math.random() * 5 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}
