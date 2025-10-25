"use client";

import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const faqs = [
  {
    question: "What areas do you operate in?",
    answer:
      "We currently serve Delhi NCR and Hyderabad with premium corporate, airport, and on-demand mobility solutions.",
  },
  {
    question: "Can I schedule my ride in advance?",
    answer:
      "Yes. You can schedule rides ahead of time using our mobile app or web platform to suit your itinerary.",
  },
  {
    question: "Are your drivers trained and vetted?",
    answer:
      "All KRUZE drivers are professionally trained, background-checked, and routinely evaluated for service standards.",
  },
  {
    question: "How does KRUZE ensure safety?",
    answer:
      "We use journey tracking, safety buttons for emergency alerts, and rigorous vehicle cleanliness standards for your protection.",
  },
];

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const [open, setOpen] = useState<number | null>(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.11, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="max-w-2xl mx-auto py-2 mb-12 px-6"
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-12 text-center"
      >

        <motion.h2
          variants={itemVariants}
          className="font-normal text-[40px] md:text-[48px] leading-tight tracking-tight text-[#1f4b68]"
        >
          Frequently<br />Asked Questions
        </motion.h2>
      </motion.div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = open === idx;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-[#f5f7f9] rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between py-6 px-6 text-left text-[15px] font-normal text-[#1f4b68] focus:outline-none transition-colors duration-300"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-item-${idx}`}
              >
                <span>{faq.question}</span>
                <span
  className={`ml-4 relative flex w-8 h-8 rounded-full bg-[#156082] text-white text-lg transition-transform duration-300 ${
    isOpen ? "rotate-45" : ""
  }`}
>
  <span className="absolute inset-0 flex items-center justify-center font-medium select-none transform translate-x-[0.5px] translate-y-[-1px]">
    +
  </span>
</span>

              </button>
              <motion.div
                id={`faq-item-${idx}`}
                initial={{ height: 0, opacity: 0 }}
                animate={
                  isOpen
                    ? { height: "auto", opacity: 1, transition: { duration: 0.35, ease: "easeOut" } }
                    : { height: 0, opacity: 0, transition: { duration: 0.35, ease: "easeIn" } }
                }
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-[#495f7d] text-[14px] leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
