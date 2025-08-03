import { fetchAllProjects } from "@/app/actions/fetchProjects";
import AllProjects from "./AllProjects";

const Page = async () => {
  const projects = (await fetchAllProjects()).filter(
    (project) => project !== null,
  );

  return (
    <div className="h-full w-full overflow-y-auto scroll-smooth">
      <section className="h-screen w-full">
        <AllProjects projects={projects} />
      </section>
    </div>
  );
};

export default Page;
