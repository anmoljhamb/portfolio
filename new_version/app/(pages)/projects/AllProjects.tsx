"use client";

import { TECH_ICONS } from "@/app/data/techIcons";
import { Project } from "@/app/types";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Code,
  ExternalLink,
  Filter,
  Github,
  Monitor,
  Search,
  X,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState, useTransition } from "react";
import ReactMarkdown from "react-markdown";

const getTechIcon = (tech: string) => {
  const IconComponent = TECH_ICONS[tech] || Code;
  return <IconComponent className="w-4 h-4" />;
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};

const ProjectCard = ({
  project,
  onClick,
  index,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.04 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="inView"
      exit="exit"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col h-full bg-steel/20 backdrop-blur-sm border border-light/10 rounded-xl overflow-hidden shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.03] cursor-pointer group will-change-transform"
      onClick={onClick}
    >
      <div className="h-48 bg-dark flex items-center justify-center overflow-hidden">
        {project.images.length > 0 ? (
          <Image
            src={project.images[0]}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            height={300}
            width={300}
          />
        ) : (
          <div className="text-text flex flex-col items-center">
            <Monitor size={40} className="mb-2 opacity-50" />
            <span className="text-sm">No Preview Available</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
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

const ProjectDetailModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
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
        className="bg-steel/50 backdrop-blur-lg border border-light/10 rounded-xl max-w-4xl w-full h-[90vh] flex flex-col"
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

        <div className="p-6 overflow-y-auto colored-scroll-bar">
          {project.images.length > 0 && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.name}
                className="w-full h-auto max-h-80 object-cover"
                width={500}
                height={500}
                // fill
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
            <div className="prose prose-sm prose-invert max-w-none text-text">
              <ReactMarkdown>{project.projectReadme}</ReactMarkdown>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AllProjects = ({ projects }: { projects: Project[] }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("date-desc");
  const [showFilters, setShowFilters] = useState(true);

  const [isPending, startTransition] = useTransition();

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        project.name.toLowerCase().includes(searchLower) ||
        project.projectSummary.toLowerCase().includes(searchLower);
      const matchesTech =
        selectedTechs.length === 0 ||
        selectedTechs.every((tech) => project.techStack.includes(tech!));
      return matchesSearch && matchesTech;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-asc":
          return (
            new Date(a.dateMade).getTime() - new Date(b.dateMade).getTime()
          );
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return (
            new Date(b.dateMade).getTime() - new Date(a.dateMade).getTime()
          );
      }
    });
  }, [projects, searchTerm, selectedTechs, sortBy]);

  const allTechs = useMemo(() => {
    const freqMap: Record<string, number> = {};

    for (const project of filteredProjects) {
      for (const tech of project.techStack) {
        freqMap[tech] = (freqMap[tech] || 0) + 1;
      }
    }

    return Object.entries(freqMap)
      .sort((a, b) => b[1] - a[1])
      .map(([tech, count]) => ({ tech, count }));
  }, [filteredProjects]);

  const [showAllTechs, setShowAllTechs] = useState(false);

  const frequentTechs = allTechs.filter(({ count }) => count >= 2);
  const infrequentTechs = allTechs.filter(({ count }) => count < 2);
  const visibleTechs =
    selectedTechs.length > 0 || showAllTechs
      ? [...frequentTechs, ...infrequentTechs]
      : frequentTechs;

  const toggleTechFilter = (tech: string | null) => {
    if (tech === null) {
      setSelectedTechs([]);
    } else {
      startTransition(() => {
        setSelectedTechs((prev) =>
          prev!.includes(tech)
            ? prev.filter((t) => t !== tech)
            : [...prev, tech],
        );
      });
    }
  };

  return (
    <div className="h-screen bg-dark text-text flex flex-col">
      <div className="p-6">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text/50 z-10"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by name or summary..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-steel/50 backdrop-blur-sm text-light placeholder:text-text/50 border border-light/10 rounded-lg transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative w-full md:w-[180px]">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-steel/50 backdrop-blur-sm text-light border border-light/10 rounded-lg appearance-none transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
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
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full md:w-auto px-4 py-3 bg-steel/50 backdrop-blur-sm border border-light/10 rounded-lg flex items-center justify-center gap-2 hover:bg-accent hover:border-accent transition-colors duration-300"
              >
                <Filter size={16} /> Filters
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showFilters ? "rotate-180" : ""
                  }`}
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
                <div className="p-4 bg-steel/10 border border-light/10 rounded-lg mt-2">
                  <div className="flex flex-wrap gap-2 items-center content-center">
                    {visibleTechs.map(({ tech, count }) => (
                      <button
                        key={tech}
                        onClick={() => toggleTechFilter(tech)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200 transform hover:scale-105 ${
                          selectedTechs.includes(tech)
                            ? "bg-accent text-light shadow-lg shadow-accent/30"
                            : "bg-dark/70 text-text/80 hover:bg-steel/30"
                        }`}
                      >
                        {getTechIcon(tech)} {tech}
                        <span className="text-xs text-light/60">({count})</span>
                      </button>
                    ))}

                    {!showAllTechs &&
                      selectedTechs.length === 0 &&
                      infrequentTechs.length > 0 && (
                        <button
                          onClick={() => setShowAllTechs(true)}
                          className="text-sm font-semibold text-accent/80 hover:text-accent transition-colors"
                        >
                          Show {infrequentTechs.length} more
                        </button>
                      )}

                    {showAllTechs &&
                      selectedTechs.length === 0 &&
                      infrequentTechs.length > 0 && (
                        <button
                          onClick={() => setShowAllTechs(false)}
                          className="text-sm font-semibold text-accent/80 hover:text-accent transition-colors"
                        >
                          Show less
                        </button>
                      )}
                  </div>

                  <div className="flex justify-between">
                    {selectedTechs.length > 0 && (
                      <button
                        onClick={() => {
                          toggleTechFilter(null);
                          setShowAllTechs(false);
                        }}
                        className="mt-4 text-sm font-semibold text-accent/80 hover:text-accent transition-colors"
                      >
                        {" "}
                        Clear all filters{" "}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div
        className={`flex-1 overflow-y-auto px-6 pb-6 transition-opacity duration-300 ${
          isPending ? "opacity-60" : "opacity-100"
        } colored-scroll-bar`}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto colored-scroll-bar">
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
        {filteredProjects.length === 0 && !isPending && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 text-text/70"
          >
            <Search size={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-light mb-2">
              No Projects Found
            </h3>
            <p>Try adjusting your search or filter criteria.</p>
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
