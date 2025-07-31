"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Cloud,
  Code,
  Coffee,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Filter,
  Github,
  Globe,
  Lock,
  Monitor,
  Palette,
  Search,
  Server,
  Smartphone,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown"; // Import for rendering markdown

// techIcons and sampleProjects data remains the same as you provided...
// (I've omitted them here for brevity but they should be in your file)

const techIcons = {
  React: Code,
  JavaScript: FileText,
  TypeScript: FileText,
  "Next.js": Globe,
  "Node.js": Server,
  Python: Coffee,
  MongoDB: Database,
  PostgreSQL: Database,
  MySQL: Database,
  Express: Server,
  "Vue.js": Globe,
  Angular: Globe,
  "React Native": Smartphone,
  Flutter: Smartphone,
  AWS: Cloud,
  Docker: Server,
  GraphQL: Database,
  Redis: Database,
  Firebase: Cloud,
  "Tailwind CSS": Palette,
  SCSS: Palette,
  CSS: Palette,
  HTML: Monitor,
  Git: Code,
  Webpack: Zap,
  Vite: Zap,
  Jest: Code,
  Cypress: Code,
  Electron: Monitor,
  PHP: Server,
  Laravel: Server,
  Django: Server,
  FastAPI: Server,
  Go: Cpu,
  Rust: Cpu,
  "C++": Cpu,
  Java: Coffee,
  "Spring Boot": Server,
  Kubernetes: Cloud,
  Nginx: Server,
  Apache: Server,
  OAuth: Lock,
  JWT: Lock,
  Stripe: ExternalLink,
  "Socket.io": Zap,
  WebRTC: Globe,
  "Three.js": Monitor,
  "D3.js": Monitor,
  "Chart.js": Monitor,
  Figma: Palette,
  "Adobe XD": Palette,
};

// Sample project data
const sampleProjects = [
  {
    id: 1,
    name: "E-Commerce Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
    projectSummary:
      "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.",
    projectReadme: `# E-Commerce Dashboard

## Overview
This project is a full-featured admin dashboard built for e-commerce platforms. It provides comprehensive tools for managing products, orders, customers, and analytics.

## Features
- Real-time sales analytics
- Product inventory management
- Customer relationship management
- Order processing and tracking
- Revenue forecasting
- Multi-store support

## Technical Implementation
The dashboard is built using React with TypeScript for type safety and better developer experience. The backend leverages Node.js with Express and MongoDB for data persistence. Real-time updates are implemented using Socket.io.

## Key Challenges Solved
- Optimized large dataset rendering with virtualization
- Implemented real-time notifications system
- Created responsive design that works across all devices
- Built secure authentication with role-based access control`,
    sourceCodeLink: "https://github.com/username/ecommerce-dashboard",
    demoLink: "https://ecommerce-dashboard-demo.vercel.app",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
    ],
    dateMade: "2024-03-15",
  },
  {
    id: 2,
    name: "AI Chat Application",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop",
    projectSummary:
      "Real-time chat application with AI-powered responses and sentiment analysis.",
    projectReadme: `# AI Chat Application

## Overview
An intelligent chat application that combines real-time messaging with AI-powered features including automated responses, sentiment analysis, and conversation insights.

## Features
- Real-time messaging with WebSocket
- AI-powered chat responses
- Sentiment analysis of conversations
- Message translation
- File sharing capabilities
- Voice message support

## Architecture
Built with React and Next.js frontend, Express.js backend, and PostgreSQL database. Integrates with OpenAI API for AI features and uses Redis for session management.

## Innovation
- Custom sentiment analysis algorithm
- Smart message routing
- Adaptive AI personality based on conversation context`,
    sourceCodeLink: "https://github.com/username/ai-chat-app",
    demoLink: null,
    techStack: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Redis",
      "OpenAI API",
      "Socket.io",
    ],
    dateMade: "2024-01-22",
  },
  {
    id: 3,
    name: "Mobile Fitness Tracker",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=240&fit=crop",
    projectSummary:
      "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
    projectReadme: `# Mobile Fitness Tracker

## Overview
A comprehensive fitness tracking application built with React Native, featuring workout logging, nutrition tracking, and health metrics visualization.

## Features
- Workout planning and tracking
- Nutrition logging with barcode scanning
- Progress visualization with charts
- Social features and challenges
- Integration with wearable devices
- Offline functionality

## Technical Highlights
- Cross-platform development with React Native
- Real-time data synchronization
- Local data persistence with SQLite
- Integration with health APIs (Apple Health, Google Fit)
- Custom animation library for smooth UX

## Impact
- 10,000+ downloads within first month
- 4.8-star rating on app stores
- Featured in "Best Health Apps" category`,
    sourceCodeLink: "https://github.com/username/fitness-tracker",
    demoLink: "https://fitness-tracker-demo.app",
    techStack: ["React Native", "TypeScript", "SQLite", "Firebase", "Chart.js"],
    dateMade: "2023-11-08",
  },
  {
    id: 4,
    name: "Blockchain Voting System",
    image: null,
    projectSummary:
      "Secure and transparent voting system built on blockchain technology.",
    projectReadme: `# Blockchain Voting System

## Overview
A decentralized voting platform that ensures transparency, security, and immutability of election results using blockchain technology.

## Features
- Secure voter authentication
- Immutable vote recording
- Real-time result tracking
- Audit trail functionality
- Multi-election support
- Mobile-responsive interface

## Blockchain Integration
Built on Ethereum using Solidity smart contracts. Implements custom voting logic with security measures against common attacks.

## Security Features
- End-to-end encryption
- Zero-knowledge proofs for privacy
- Multi-signature wallet integration
- Audit logging
- Anti-fraud mechanisms`,
    sourceCodeLink: "https://github.com/username/blockchain-voting",
    demoLink: null,
    techStack: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
    dateMade: "2023-09-14",
  },
  {
    id: 5,
    name: "Data Visualization Platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
    projectSummary:
      "Interactive platform for creating and sharing data visualizations and dashboards.",
    projectReadme: `# Data Visualization Platform

## Overview
A powerful web-based platform that allows users to create interactive data visualizations and dashboards without coding knowledge.

## Features
- Drag-and-drop chart builder
- Multiple data source connections
- Real-time data updates
- Collaborative editing
- Export capabilities
- Template library

## Technical Architecture
Built with Vue.js frontend and Python Django backend. Uses D3.js for custom visualizations and WebSocket for real-time updates.

## Supported Visualizations
- Bar charts, line graphs, pie charts
- Heat maps and scatter plots
- Geographic maps
- Custom SVG visualizations
- Interactive filtering and drill-down`,
    sourceCodeLink: "https://github.com/username/data-viz-platform",
    demoLink: "https://dataviz-platform-demo.com",
    techStack: [
      "Vue.js",
      "Django",
      "D3.js",
      "PostgreSQL",
      "WebSocket",
      "Python",
    ],
    dateMade: "2024-02-10",
  },
];

const getTechIcon = (tech) => {
  const IconComponent = techIcons[tech] || Code;
  return <IconComponent className="w-4 h-4" />;
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};

// ====================================================================
// New Project Card Component
// ====================================================================
const ProjectCard = ({ project, onClick, index }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    inView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="initial"
      animate="inView"
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-steel/60 backdrop-blur-sm border border-light/10 rounded-xl overflow-hidden shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.03] cursor-pointer group"
      onClick={onClick}
    >
      {/* Card Image */}
      <div className="h-48 bg-dark flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="text-text flex flex-col items-center">
            <Monitor size={40} className="mb-2 opacity-50" />
            <span className="text-sm">No Preview Available</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-light mb-2 truncate">
          {project.name}
        </h3>
        <p className="text-text text-sm mb-4 h-10 line-clamp-2">
          {project.projectSummary}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-dark/70 rounded-full text-xs text-text/80 flex items-center gap-1.5"
            >
              {getTechIcon(tech)} {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2.5 py-1 bg-dark/70 rounded-full text-xs text-text/80">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="pt-3 border-t border-light/10 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-text/70">
            <Calendar size={14} />
            <span>{formatDate(project.dateMade)}</span>
          </div>
          <div className="flex gap-3">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-accent hover:text-light transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            <a
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-accent hover:text-light transition-colors"
              aria-label="Source Code"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ====================================================================
// New Project Detail Modal
// ====================================================================
const ProjectDetailModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-steel/80 backdrop-blur-lg border border-light/10 rounded-xl max-w-4xl w-full h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-light/10 flex-shrink-0">
          <h2 className="text-2xl font-bold text-light">{project.name}</h2>
          <button
            onClick={onClose}
            className="text-text hover:text-light transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {project.image && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto max-h-80 object-cover"
              />
            </div>
          )}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-light mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-dark/70 rounded-full text-sm text-text flex items-center gap-2"
                  >
                    {getTechIcon(tech)} {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-light mb-2">
                Links & Info
              </h3>
              <div className="flex items-center gap-2 text-text">
                <Calendar size={16} />
                <span className="text-sm">
                  {new Date(project.dateMade).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <a
                href={project.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-light transition-colors"
              >
                <Github size={16} /> View Source
              </a>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-light transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-light mb-4 border-t border-light/10 pt-4">
              About This Project
            </h3>
            {/* THIS IS THE NEW PART FOR RENDERING MARKDOWN */}
            <div className="prose prose-sm prose-invert max-w-none text-text">
              <ReactMarkdown>{project.projectReadme}</ReactMarkdown>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AllProjects = () => {
  // State management hooks remain the same
  const [projects] = useState(sampleProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [sortBy, setSortBy] = useState("date-desc");
  const [showFilters, setShowFilters] = useState(true);

  // useMemo hooks for filtering and sorting remain the same
  const allTechs = useMemo(() => {
    const techs = new Set(projects.flatMap((p) => p.techStack));
    return Array.from(techs).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        project.name.toLowerCase().includes(searchLower) ||
        project.projectSummary.toLowerCase().includes(searchLower);
      const matchesTech =
        selectedTechs.length === 0 ||
        selectedTechs.every((tech) => project.techStack.includes(tech));
      return matchesSearch && matchesTech;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-asc":
          return new Date(a.dateMade) - new Date(b.dateMade);
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return new Date(b.dateMade) - new Date(a.dateMade);
      }
    });
  }, [projects, searchTerm, selectedTechs, sortBy]);

  const toggleTechFilter = (tech) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  return (
    <div className="h-screen bg-dark text-text flex flex-col">
      <div className="p-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-light mb-3">
            My Digital Creations
          </h1>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            A curated collection of my work. Filter, sort, and explore.
          </p>
        </motion.div>

        {/* === NEW & IMPROVED PURE TAILWIND FILTER SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Custom Search Input */}
            <div className="relative flex-grow">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text/50"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by name or summary..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-steel/60 backdrop-blur-sm text-light placeholder:text-text/50 border border-light/10 rounded-lg transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
              />
            </div>

            <div className="flex gap-4">
              {/* Custom Select Dropdown */}
              <div className="relative w-full md:w-[180px]">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-steel/60 backdrop-blur-sm text-light border border-light/10 rounded-lg appearance-none transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
                >
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text/50 pointer-events-none"
                  size={20}
                />
              </div>

              {/* Custom Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full md:w-auto px-4 py-3 bg-steel/60 backdrop-blur-sm border border-light/10 rounded-lg flex items-center justify-center gap-2 hover:bg-accent hover:border-accent transition-colors duration-300"
              >
                <Filter size={16} /> Filters
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-steel/40 border border-light/10 rounded-lg mt-2">
                  <div className="flex flex-wrap gap-2">
                    {/* Custom Tech Toggles */}
                    {allTechs.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => toggleTechFilter(tech)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200 transform hover:scale-105 ${
                          selectedTechs.includes(tech)
                            ? "bg-accent text-light shadow-lg shadow-accent/30"
                            : "bg-dark/70 text-text/80 hover:bg-steel"
                        }`}
                      >
                        {getTechIcon(tech)} {tech}
                      </button>
                    ))}
                  </div>
                  {selectedTechs.length > 0 && (
                    <button
                      onClick={() => setSelectedTechs([])}
                      className="mt-4 text-sm font-semibold text-accent/80 hover:text-accent transition-colors"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* SCROLLABLE PROJECT GRID & MODAL (No changes needed here) */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-text/70"
          >
            <Search size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-light mb-2">
              No Projects Found
            </h3>
            <p>Try a different search term or clear the filters.</p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllProjects;
