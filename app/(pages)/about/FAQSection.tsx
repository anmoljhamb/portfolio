"use client";

import { faqData } from "@/app/data/faq";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="h-screen w-full snap-start bg-dark text-text overflow-hidden relative flex flex-col">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-steel rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full px-8 lg:px-16 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-accent" />
            <h2 className="text-4xl lg:text-5xl font-bold text-light">
              Frequently Asked
            </h2>
          </div>
          <p className="text-text/70 text-lg max-w-2xl">
            Quick answers about who I am, what I do, and how to reach me.
          </p>
        </motion.div>

        <div className="flex-1 overflow-y-auto no-scroll-bar">
          <div className="max-w-3xl space-y-3">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-steel/30 rounded-xl overflow-hidden hover:border-accent/30 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left group cursor-pointer"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-light font-semibold text-lg pr-4 group-hover:text-accent transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-accent" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-text leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
