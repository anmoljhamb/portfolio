import { PAGE_LOADING_TIMER } from "@/app/constants";
import { delay } from "@/app/utils/misc";
import AboutHeader from "./AboutHeader";
import JourneyTimeline from "./JourneyTimeline";
import WhyICodeTechSection from "./TechSection";
import { Metadata } from "next";
import { FULL_NAME, SHORT_SUMMARY, TAGS, BIO, SITE_URL } from "@/app/data/about";
import { timeline } from "@/app/data/timeline";
import {
  techNerdContent,
  whyICodeContent,
} from "@/app/data/why-i-code-content";
import { faqData } from "@/app/data/faq";
import {
  BreadcrumbSchema,
  ProfilePageSchema,
  FAQSchema,
} from "@/app/components/SchemaMarkup";

export const metadata: Metadata = {
  title: `About ${FULL_NAME} | Software Engineer & Full Stack Developer`,
  description: BIO,
  keywords: [
    "Anmol Jhamb",
    "about Anmol Jhamb",
    "software engineer",
    "full stack developer",
    "Google Code-in winner",
    "ICPC regionalist",
    "ConsultAdd",
    "competitive programmer",
    "React developer",
    "Python developer",
  ],
  openGraph: {
    title: `About ${FULL_NAME} — Software Engineer`,
    description:
      "Software Engineer, ICPC Regionalist '24, Google Code-in Winner '19. Full-stack developer specializing in React, Python, and TypeScript.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `About ${FULL_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${FULL_NAME}`,
    description:
      "Software Engineer, ICPC Regionalist '24, Google Code-in Winner '19",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

const Page = async () => {
  await delay(PAGE_LOADING_TIMER);

  return (
    <>
      {/* Schema Markup for SEO/GEO/AEO */}
      <ProfilePageSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "About", url: `${SITE_URL}/about` },
        ]}
      />
      <FAQSchema faqs={faqData} />

      {/* Screen-reader / crawler accessible content (sr-only) */}
      <div className="sr-only">
        <h1>{FULL_NAME}</h1>
        <p>{BIO}</p>
        {TAGS.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
        <div>{SHORT_SUMMARY}</div>

        <h2>My Journey</h2>
        {timeline.map((item, index) => (
          <article key={index}>
            <h3>
              {item.year}: {item.title}
            </h3>
            <p>{item.desc}</p>
          </article>
        ))}

        <h2>{whyICodeContent.title}</h2>
        <blockquote>{whyICodeContent.quote}</blockquote>
        {whyICodeContent.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <h2>{techNerdContent.title}</h2>
        {techNerdContent.techItems.map((item, i) => (
          <div key={i}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}

        <h2>Frequently Asked Questions about {FULL_NAME}</h2>
        {faqData.map((faq, i) => (
          <div key={i}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="h-full w-full overflow-y-auto scroll-smooth snap-y snap-mandatory no-scroll-bar">
        <section className="h-screen w-full snap-start">
          <AboutHeader />
        </section>
        <section id="journey" className="h-screen w-full snap-start">
          <JourneyTimeline />
        </section>
        <section id="tech-section" className="h-screen w-full snap-start">
          <WhyICodeTechSection />
        </section>
      </div>
    </>
  );
};

export default Page;
