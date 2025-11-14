import { PAGE_LOADING_TIMER } from "@/app/constants";
import { delay } from "@/app/utils/misc";
import ContactPage from "./ContactPage";
import { Metadata } from "next";
import { FULL_NAME } from "@/app/data/about";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LEETCODE_URL,
  LINKEDIN_URL,
} from "@/app/data/socials";

export const metadata: Metadata = {
  title: `Contact ${FULL_NAME} | Get in Touch`,
  description:
    "Get in touch with Anmol Jhamb. Connect on LinkedIn, GitHub, Instagram, or LeetCode.",
  openGraph: {
    title: `Contact ${FULL_NAME}`,
    url: "https://www.heyitsanmolj.me/contact",
  },
};

const Page = async () => {
  await delay(PAGE_LOADING_TIMER);

  return (
    <>
      <div className="sr-only">
        <h1>Contact {FULL_NAME}</h1>
        <p>Get in touch through my social profiles:</p>
        <ul>
          <li>
            <a href={LINKEDIN_URL}>LinkedIn</a>
          </li>
          <li>
            <a href={GITHUB_URL}>GitHub</a>
          </li>
          <li>
            <a href={INSTAGRAM_URL}>Instagram</a>
          </li>
          <li>
            <a href={LEETCODE_URL}>LeetCode</a>
          </li>
        </ul>
      </div>
      <ContactPage />;
    </>
  );
};

export default Page;
