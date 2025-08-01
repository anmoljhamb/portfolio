import React from "react";

export type Social = {
  link: `https://${string}`;
  color: `#${string}`;
  icon: React.ReactNode;
};

export type Project = {
  id: number;
  name: string;
  image: string | null;
  projectSummary: string;
  projectReadme: string;
  sourceCodeLink: string;
  demoLink: string | null;
  techStack: string[];
  dateMade: string;
  stars: number;
  watchers: number;
  forks: number;
};

export type TimelineItem = {
  year: string;
  title: string;
  desc: string;
  type: "education" | "work" | "achievement" | "future";
  icon: React.ComponentType<{ className?: string }>;
  photos: string[];
  extraLink?: string;
  extraText?: string;
};
