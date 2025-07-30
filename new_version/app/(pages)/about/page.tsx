import { PAGE_LOADING_TIMER } from "@/app/constants";
import { delay } from "@/app/utils/misc";
import AboutHeader from "./AboutHeader";
import JourneyTimeline from "./JourneyTimeline";

const Page = async () => {
  await delay(PAGE_LOADING_TIMER);

  return (
    <div className="h-full w-full overflow-y-auto scroll-smooth snap-y snap-mandatory">
      <section className="h-screen w-full snap-start">
        <AboutHeader />
      </section>
      <section className="h-screen w-full snap-start">
        <JourneyTimeline />
      </section>
      {/* Add more sections here */}
    </div>
  );
};

export default Page;
