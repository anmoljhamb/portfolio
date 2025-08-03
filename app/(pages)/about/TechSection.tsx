"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import {
  whyICodeContent,
  techNerdContent,
} from "@/app/data/why-i-code-content";

const WhyICodeTechSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const {
    title: whyTitle,
    icon: WhyIcon,
    quote,
    paragraphs,
    closing,
  } = whyICodeContent;
  const {
    title: techTitle,
    icon: TechIcon,
    techItems,
    footer,
  } = techNerdContent;

  return (
    <section className="h-screen w-full snap-start bg-dark text-text overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-steel rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col lg:flex-row">
        {/* Why I Code Section (Larger part) */}
        <motion.div
          className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:w-3/5"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <WhyIcon className="w-8 h-8 text-accent" />
              <h2 className="text-4xl lg:text-5xl font-bold text-light">
                {whyTitle}
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="space-y-6 text-lg lg:text-xl leading-relaxed max-w-2xl"
          >
            <p className="text-light font-semibold">{quote}</p>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <motion.div
              className="flex items-center gap-2 text-accent font-semibold pt-4"
              variants={fadeInUp}
            >
              <Code className="w-5 h-5" />
              <span>{closing}</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech Nerd Section (Smaller part) */}
        <motion.div
          className="flex flex-col justify-center px-8 lg:px-16 py-16 bg-steel/10 lg:w-2/5"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <TechIcon
                className="w-8 h-8 text-accent animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <h2 className="text-4xl lg:text-5xl font-bold text-light">
                {techTitle}
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {techItems.map((item) => (
              <motion.div
                key={item.title}
                className="bg-dark/50 p-4 rounded-lg border border-steel/30 hover:border-accent/50 transition-colors group cursor-pointer"
                whileHover={{ scale: 1.03, y: -3 }}
                variants={fadeInUp}
              >
                <item.icon className="w-6 h-6 text-accent mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-light font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-80">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 text-sm text-accent font-mono"
          >
            <span className="animate-pulse">{footer.text1}</span>
            <span className="ml-2">• {footer.text2}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyICodeTechSection;
