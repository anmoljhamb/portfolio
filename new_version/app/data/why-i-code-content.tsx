import { Code, Github, Heart, Settings, Terminal, Trophy } from "lucide-react";

export const whyICodeContent = {
  title: "Why I Code",
  icon: Heart,
  quote:
    "It started with a dream to build Jarvis. It evolved into a passion for solving real-world puzzles.",
  paragraphs: [
    "For me, coding is the ultimate form of creation. It's a journey that began with a teenage fascination for AI and turned into a career built on turning complex problems into elegant, tangible solutions. The magic lies in that moment when abstract logic clicks into place and creates something that genuinely helps people.",
    "It's the thrill of the 'aha!' moment in a late-night coding session, the satisfaction of a perfectly architected system, and the collaborative spirit of contributing to open source. Every commit is a step forward, a small piece of a much larger puzzle I'm helping to build.",
  ],
  closing: "Building the future, one commit at a time.",
};

export const techNerdContent = {
  title: "Tech Nerd",
  icon: Settings,
  techItems: [
    {
      icon: Trophy,
      title: "Competitive Programming",
      subtitle: "ICPC Regionalist & DSA Enthusiast",
    },
    {
      icon: Terminal,
      title: "Custom Environment",
      subtitle: "My daily driver & personal setup",
    },
    {
      icon: Code,
      title: "System Design",
      subtitle: "Architecting scalable solutions",
    },
    {
      icon: Github,
      title: "Open Source",
      subtitle: "A philosophy of sharing",
    },
  ],
  footer: {
    text1: "~/environment",
    text2: "Debian • qtile • tmux • nvim",
  },
};
