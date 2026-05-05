import { PAGE_LOADING_TIMER } from "@/app/constants";
import { delay } from "@/app/utils/misc";
import ContactPage from "./ContactPage";
import { Metadata } from "next";
import { FULL_NAME, SITE_URL, EMAIL } from "@/app/data/about";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LEETCODE_URL,
  LINKEDIN_URL,
} from "@/app/data/socials";
import {
  BreadcrumbSchema,
  ContactPageSchema,
} from "@/app/components/SchemaMarkup";

export const metadata: Metadata = {
  title: `Contact ${FULL_NAME} | Get in Touch`,
  description: `Get in touch with ${FULL_NAME}. Reach out via email at ${EMAIL}, or connect on LinkedIn, GitHub, Instagram, or LeetCode.`,
  keywords: [
    "contact Anmol Jhamb",
    "Anmol Jhamb email",
    "Anmol Jhamb LinkedIn",
    "hire Anmol Jhamb",
    "software engineer contact",
  ],
  openGraph: {
    title: `Contact ${FULL_NAME}`,
    description: `Get in touch with ${FULL_NAME} — email, LinkedIn, GitHub, and more.`,
    url: `${SITE_URL}/contact-me`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `Contact ${FULL_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${FULL_NAME}`,
    description: `Get in touch — email, LinkedIn, GitHub, Instagram.`,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${SITE_URL}/contact-me`,
  },
};

const Page = async () => {
  await delay(PAGE_LOADING_TIMER);

  return (
    <>
      {/* Schema Markup */}
      <ContactPageSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Contact", url: `${SITE_URL}/contact-me` },
        ]}
      />

      <div className="sr-only">
        <h1>Contact {FULL_NAME}</h1>
        <p>
          Get in touch with {FULL_NAME}. Have a project in mind or just want to
          say hi? Reach out directly via email or connect on social media.
        </p>
        <h2>Email</h2>
        <p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <h2>Social Profiles</h2>
        <ul>
          <li>
            <a href={LINKEDIN_URL}>LinkedIn — linkedin.com/in/anmoljhamb</a>
          </li>
          <li>
            <a href={GITHUB_URL}>GitHub — github.com/anmoljhamb</a>
          </li>
          <li>
            <a href={INSTAGRAM_URL}>Instagram — @heyitsanmolj</a>
          </li>
          <li>
            <a href={LEETCODE_URL}>LeetCode — leetcode.com/anmoljhamb</a>
          </li>
        </ul>
      </div>
      <ContactPage />
    </>
  );
};

export default Page;
