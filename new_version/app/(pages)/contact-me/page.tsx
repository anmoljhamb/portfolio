import { PAGE_LOADING_TIMER } from "@/app/constants";
import { delay } from "@/app/utils/misc";
import ContactPage from "./ContactPage";

const Page = async () => {
  await delay(PAGE_LOADING_TIMER);

  return <ContactPage />;
};

export default Page;
