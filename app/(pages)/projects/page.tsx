import { fetchAllProjects } from "@/app/actions/fetchProjects";
import AllProjects from "./AllProjects";
import { Metadata } from "next";
import { FULL_NAME, SITE_URL } from "@/app/data/about";
import {
  BreadcrumbSchema,
  CollectionPageSchema,
} from "@/app/components/SchemaMarkup";

export const metadata: Metadata = {
  title: `Projects | ${FULL_NAME} — Software Engineering Portfolio`,
  description: `Explore ${FULL_NAME}'s portfolio of software development projects including VSCode extensions, IoT systems, web applications, and open-source contributions built with React, Python, TypeScript, and more.`,
  keywords: [
    "Anmol Jhamb projects",
    "portfolio",
    "software projects",
    "web development",
    "VSCode extension",
    "open source",
    "React projects",
    "Python projects",
    "IoT projects",
    "full stack projects",
  ],
  openGraph: {
    title: `Projects by ${FULL_NAME}`,
    description: `A curated portfolio of web applications, IoT systems, developer tools, and open-source projects by ${FULL_NAME}.`,
    url: `${SITE_URL}/projects`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `Projects by ${FULL_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects by ${FULL_NAME}`,
    description: `Software projects portfolio — web apps, IoT, developer tools & open source.`,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

const Page = async () => {
  const projects = (await fetchAllProjects()).filter(
    (project) => project !== null,
  );

  return (
    <>
      {/* Schema Markup */}
      <CollectionPageSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Projects", url: `${SITE_URL}/projects` },
        ]}
      />

      <div className="sr-only">
        <h1>Projects by {FULL_NAME}</h1>
        <p>
          A portfolio of software development projects by {FULL_NAME},
          including web applications, VSCode extensions, IoT systems, and
          open-source tools built with React, Python, TypeScript, and more.
        </p>
        {projects.map((project, index) => (
          <article key={index}>
            <h2>{project.name}</h2>
            <p>{project.projectSummary}</p>
            {project.techStack.length > 0 && (
              <p>Technologies: {project.techStack.join(", ")}</p>
            )}
            {!project.isPrivate && (
              <a href={project.sourceCodeLink}>View Source Code</a>
            )}
            {project.demoLink && (
              <a href={project.demoLink}>View Live Demo</a>
            )}
            <p>Date Created: {project.dateMade}</p>
          </article>
        ))}
      </div>
      <div className="h-full w-full overflow-y-auto scroll-smooth">
        <section className="h-screen w-full">
          <AllProjects projects={projects} />
        </section>
      </div>
    </>
  );
};

export default Page;
