import { fetchAllProjects } from "@/app/actions/fetchProjects";
import AllProjects from "./AllProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Anmol Jhamb",
  description:
    "Explore my portfolio of web development projects including VSCode extensions, inventory management systems, and open-source contributions.",
  openGraph: {
    title: "Projects by Anmol Jhamb",
    url: "https://www.heyitsanmolj.me/projects",
  },
};

const Page = async () => {
  const projects = (await fetchAllProjects()).filter(
    (project) => project !== null,
  );

  return (
    <>
      <div className="sr-only">
        <h1>Projects by Anmol Jhamb</h1>
        {projects.map((project, index) => (
          <article key={index}>
            <h2>{project.name}</h2>
            <p>{project.projectSummary}</p>
            <a href={project.sourceCodeLink}>View Project</a>
            {project.demoLink && (
              <a href={project.demoLink}>View Project Demo</a>
            )}
            <p>Date Made: {project.dateMade}</p>
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
