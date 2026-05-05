import { FULL_NAME, SITE_URL, EMAIL, BIO, TAGS } from "@/app/data/about";
import {
  LINKEDIN_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LEETCODE_URL,
} from "@/app/data/socials";

/**
 * Global Person + WebSite schema.
 * Injected once at the root layout level.
 */
export function GlobalSchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: FULL_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    email: `mailto:${EMAIL}`,
    jobTitle: "Associate Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "ConsultAdd",
      department: "CTO's Office",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University (B.Tech in Computer Science)",
    },
    description: BIO,
    sameAs: [
      LINKEDIN_URL,
      GITHUB_URL,
      INSTAGRAM_URL,
      LEETCODE_URL,
      "https://heyitsanmolj.hashnode.dev",
      "https://medium.com/@codingwithaj",
    ],
    knowsAbout: [
      "Full Stack Development",
      "Competitive Programming",
      "Python",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "System Design",
      "NeoVim",
      "Django",
      "MongoDB",
      "Firebase",
      "REST APIs",
      "WebSockets",
    ],
    award: [
      "Google Code-in Grand Prize Winner 2019",
      "ICPC 2024 Regionalist (Amritapuri & Kanpur)",
      "7 Programming Contest Victories (2018)",
    ],
    nationality: {
      "@type": "Country",
      name: "India",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: `${FULL_NAME} — Portfolio`,
    url: SITE_URL,
    description: `Personal portfolio of ${FULL_NAME}. ${TAGS.join(" • ")}. Explore projects, achievements, and get in touch.`,
    author: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

/**
 * BreadcrumbList schema.
 * Pass an array of breadcrumb items to generate the schema.
 */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}

/**
 * ProfilePage schema for the about page.
 * Signals to AI engines that this is the authoritative profile.
 */
export function ProfilePageSchema() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/about#profilepage`,
    name: `About ${FULL_NAME}`,
    url: `${SITE_URL}/about`,
    description: BIO,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    dateCreated: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(profileSchema),
      }}
    />
  );
}

/**
 * FAQPage schema. Pass FAQ items to generate structured data.
 */
export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}

/**
 * CollectionPage schema for the projects page.
 */
export function CollectionPageSchema() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Projects by ${FULL_NAME}`,
    url: `${SITE_URL}/projects`,
    description: `A portfolio of software development projects by ${FULL_NAME}, including web applications, VSCode extensions, IoT systems, and open-source tools.`,
    author: { "@id": `${SITE_URL}/#person` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(collectionSchema),
      }}
    />
  );
}

/**
 * ContactPage schema for the contact page.
 */
export function ContactPageSchema() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${FULL_NAME}`,
    url: `${SITE_URL}/contact-me`,
    description: `Get in touch with ${FULL_NAME}. Connect via email, LinkedIn, GitHub, or Instagram.`,
    mainEntity: { "@id": `${SITE_URL}/#person` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(contactSchema),
      }}
    />
  );
}
