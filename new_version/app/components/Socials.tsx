import { Social } from "@/app/types";
import { clsx } from "clsx";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LEETCODE_URL,
  LINKEDIN_URL,
} from "@/app/data/socials";
import { SiLeetcode } from "react-icons/si";

const socials: Social[] = [
  {
    link: LINKEDIN_URL,
    color: "#0A66C2",
    icon: <FaLinkedin />,
  },
  {
    link: GITHUB_URL,
    color: "#333",
    icon: <FaGithub />,
  },
  {
    link: INSTAGRAM_URL,
    color: "#e95950",
    icon: <FaInstagram />,
  },
  {
    link: LEETCODE_URL,
    color: "#070706",
    icon: <SiLeetcode />,
  },
];

const Socials = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 z-10">
      {socials.map((social) => {
        console.log(social.color);
        return (
          <a
            key={social.link}
            rel="noreferrer"
            target="_blank"
            href={social.link}
          >
            <div
              key={social.link}
              className={clsx(
                "px-4 py-4 text-4xl text-white",
                "pl-10 -translate-x-6",
                "hover:translate-x-0",
                "ease-in-out duration-400 transition-all",
              )}
              style={{
                backgroundColor: social.color,
              }}
            >
              {social.icon}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
