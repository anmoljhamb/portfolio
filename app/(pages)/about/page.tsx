import { PAGE_LOADING_TIMER } from "@/app/constants";
import { delay } from "@/app/utils/misc";
import AboutHeader from "./AboutHeader";
import JourneyTimeline from "./JourneyTimeline";
import WhyICodeTechSection from "./TechSection";
import { Metadata } from "next";
import { FULL_NAME, SHORT_SUMMARY, TAGS } from "@/app/data/about";
import { timeline } from "@/app/data/timeline";
import {
  techNerdContent,
  whyICodeContent,
} from "@/app/data/why-i-code-content";

export const metadata: Metadata = {
  title: `About ${FULL_NAME} | Full Stack Developer`,
  description:
    "Learn about my journey from building Jarvis at 15 to becoming an ICPC Regionalist and Google Code-in Winner. Explore my career in software development.",
  openGraph: {
    title: `About ${FULL_NAME}`,
    description:
      "Software Engineer, ICPC Regionalist '24, Google Code-in Winner '19",
    url: "https://www.heyitsanmolj.me/about",
  },
};

const Page = async () => {
  await delay(PAGE_LOADING_TIMER);

  return (
    <>
      <div className="sr-only">
        <h1>{FULL_NAME}</h1>
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
