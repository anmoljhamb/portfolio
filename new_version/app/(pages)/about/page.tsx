import { PAGE_LOADING_TIMER } from "@/app/constants";
import { delay } from "@/app/utils/misc";
import AboutHeader from "./AboutHeader";

const Page = async () => {
  await delay(PAGE_LOADING_TIMER);

  return (
    <>
      <AboutHeader />
    </>
  );
};

export default Page;
