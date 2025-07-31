import { LINKEDIN_URL } from "./data/socials";

export const APP_LOADING_TIMER = 1000;
export const PAGE_LOADING_TIMER = 750;

export const NAV_LINKS: {
  title: string;
  href: string;
  external?: boolean;
}[] = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact Me", href: "/contact-me" },
  { title: "Github", href: "https://github.com/anmoljhamb", external: true },
  { title: "Blog", href: "https://heyitsanmolj.hashnode.dev", external: true },
];
