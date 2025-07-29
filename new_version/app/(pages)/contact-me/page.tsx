import { PAGE_LOADING_TIMER } from "@/app/constants";
import { delay } from "@/app/utils/misc";

const Page = async () => {
  await delay(PAGE_LOADING_TIMER);

  return <div>Contact Me</div>;
};

export default Page;
