import { PAGE_LOADING_TIMER } from "@/app/constants";
import { delay } from "@/app/utils/misc";

const Page = async () => {
  await delay(PAGE_LOADING_TIMER);

  return <div>List of All The Projects</div>;
};

export default Page;
