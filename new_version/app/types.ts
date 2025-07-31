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
};
