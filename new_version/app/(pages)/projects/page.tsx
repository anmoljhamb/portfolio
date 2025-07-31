import { PAGE_LOADING_TIMER } from "@/app/constants";
import { delay } from "@/app/utils/misc";
import AllProjects from "./AllProjects";

const Page = async () => {
  await delay(PAGE_LOADING_TIMER);

  return (
    <div className="h-full w-full overflow-y-auto scroll-smooth">
      <section className="h-screen w-full">
        <AllProjects />
      </section>
    </div>
  );
};

export default Page;
