"use client";

import { motion } from "framer-motion";
import {
  Code,
  Coffee,
  GitBranch,
  Github,
  Heart,
  Settings,
  Star,
  Terminal,
} from "lucide-react";

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

  const techItems = [
    {
      icon: Github,
      title: "Open Source",
      subtitle: "Contributing to the community",
    },
    { icon: Terminal, title: "Neovim", subtitle: "My daily driver & dotfiles" },
    {
      icon: Code,
      title: "System Design",
      subtitle: "Building scalable solutions",
    },
    {
      icon: Coffee,
      title: "Late Night Coding",
      subtitle: "When the magic happens",
    },
  ];

  const openSourceProjects = [
    {
      name: "react-ui-kit",
      stars: "2.1k",
      desc: "Accessible component library",
    },
    { name: "dev-tools", stars: "856", desc: "CLI tools for developers" },
    { name: "neovim-config", stars: "432", desc: "My personal Neovim setup" },
  ];

  return (
    <section className="h-screen w-full snap-start bg-dark text-text overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-steel rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col lg:flex-row">
        <motion.div
          className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-accent" />
              <h2 className="text-4xl lg:text-5xl font-bold text-light">
                Why I Code
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="space-y-6 text-lg lg:text-xl leading-relaxed max-w-2xl"
          >
            <p className="text-light font-medium">
              "I fell in love with building systems that help people solve real
              problems."
            </p>

            <p>
              There's something magical about turning abstract ideas into
              tangible solutions. Every line of code is a small piece of a
              larger puzzle, and when it all comes together to make someone's
              life easier or more productive, that's when I know I'm doing
              exactly what I'm meant to do.
            </p>

            <p>
              It's not just about the technology—it's about the impact. Whether
              it's automating tedious tasks, creating intuitive interfaces, or
              contributing to open source projects that thousands of developers
              rely on, code is my way of making a meaningful difference in the
              world.
            </p>

            <motion.div
              className="flex items-center gap-2 text-accent font-semibold pt-4"
              variants={fadeInUp}
            >
              <Code className="w-5 h-5" />
              <span>Building the future, one commit at a time</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 bg-color-steel/20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings
                className="w-8 h-8 text-color-accent animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <h2 className="text-4xl lg:text-5xl font-bold text-color-light">
                Tech Nerd
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            {techItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-color-dark/50 p-4 rounded-lg border border-color-steel/30 hover:border-color-accent/50 transition-colors group cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                variants={fadeInUp}
              >
                <item.icon className="w-6 h-6 text-color-accent mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-color-light font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-xl font-bold text-color-light flex items-center gap-2 mb-4">
              <Github className="w-5 h-5" />
              Open Source Contributions
            </h3>

            {openSourceProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-color-dark/30 p-4 rounded-lg border border-color-steel/20 hover:border-color-accent/30 transition-all group"
                whileHover={{ x: 8 }}
                variants={fadeInUp}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-color-accent" />
                    <span className="font-mono text-color-light font-semibold">
                      {project.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span className="text-color-text">{project.stars}</span>
                  </div>
                </div>
                <p className="text-sm opacity-75 pl-6">{project.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-6 text-sm text-color-accent font-mono"
          >
            <span className="animate-pulse">~/dotfiles</span> •
            <span className="ml-2">nvim • tmux • zsh</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-color-accent via-color-steel to-color-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </section>
  );
};

export default WhyICodeTechSection;
