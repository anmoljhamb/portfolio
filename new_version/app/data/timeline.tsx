import { TimelineItem } from "@/app/types";
import {
  AlarmClockPlus,
  Briefcase,
  Code,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { GiPodiumWinner } from "react-icons/gi";

export const timeline: TimelineItem[] = [
  {
    year: "2017",
    title: "Falling Down the Rabbit-Hole",
    desc: "It all started at 15 with an audacious goal: to build my own Jarvis. The only problem? I didn't know how to code. So, I taught myself. This journey culminated in a functional AI assistant, features in two newspapers, and my official descent into the programming rabbit-hole. I fell hard and never looked back.",
    type: "education",
    icon: Lightbulb,
    photos: [1, 2, 3, 4, 5, 6, 7, 8].map(
      (i) => `/about/timeline/jarvis_${i}.webp`,
    ),
    extraLink:
      "https://medium.com/@codingwithaj/how-i-created-my-own-jarvis-at-the-age-of-15-463c8649d368",
    extraText: "View Blog-post",
  },
  {
    year: "2018",
    title: "The Wake-Up Call",
    desc: "Riding high on my initial success, I walked into my first coding competition feeling invincible. That confidence shattered spectacularly. It was a Data Structures & Algorithms contest, and I couldn't solve a single problem. This humbling defeat was the wake-up call I desperately needed.",
    type: "achievement",
    icon: AlarmClockPlus,
    photos: [],
  },
  {
    year: "2018",
    title: "The Redemption Arc",
    desc: "Fueled by my previous failure, I dove deep into competitive programming but didn't stop building. While grinding Data Structures & Algorithms for contests, I was also actively developing projects on the side. The hard work paid off: on December 1st, 2018, I claimed my first victory in a programming contest. This win kicked off a streak, leading to 7 contest wins during my 12th-grade year.",
    type: "achievement",
    icon: GiPodiumWinner,
    photos: [1, 2, 3, 4, 5, 6, 7].map(
      (i) => `/about/timeline/contest_${i}.jpg`,
    ),
  },
  {
    year: "2019",
    title: "Google Code-in Grand Prize",
    desc: "A landmark achievement: I was selected as one of 58 Grand Prize Winners worldwide for the 10th anniversary (and final edition) of Google Code-in. The prize was an all-expenses-paid trip to California, which was unfortunately canceled due to the pandemic. Amidst this, I also celebrated my high school graduation!",
    type: "achievement",
    icon: Code,
    photos: [1, 2, 3, 4, 5].map((i) => `/about/timeline/gci_${i}.jpg`),
  },
  {
    year: "2021-2025",
    title: "University & Project Spree",
    desc: "Started my B.Tech in Computer Science. My university years were a whirlwind of building cool projects, diving into hackathons, and stacking up a few wins along the way.",
    type: "education",
    icon: GraduationCap,
    photos: [1, 2, 3, 4, 5, 6, 7, 8].map(
      (i) => `/about/timeline/college_${i}.jpg`,
    ),
  },
  {
    year: "June 2023",
    title: "The Death of Ctrl+Shift Selection",
    desc: "I had always wanted to learn Vim but was daunted by the learning curve. After discovering a brilliant tutorial series by ThePrimeagen, something finally clicked. It fundamentally changed my workflow for the better. The days of tedious mouse selections were over.",
    type: "work",
    icon: Code,
    photos: [],
  },
  {
    year: "January 2024",
    title: "The Death of VSCode",
    desc: "Tired of the endless configuration required to make VSCode fit my needs, I decided it was time to go all in. I embraced the madness and dedicated my winter vacation to mastering NeoVim and crafting my own dotfiles from scratch.",
    type: "work",
    icon: Code,
    photos: ["/about/timeline/nvim.png"],
    extraText: "View my dotfiles",
    extraLink: "https://github.com/anmoljhamb/dotfiles.git",
  },
  {
    year: "July - August, 2024",
    title: "First Internship: DSA Instructor",
    desc: "Landed my first internship as a Java & DSA Instructor. I taught two 70-student batches daily in 3-hour, in-person sessions. This role was pivotal in honing my ability to break down complex topics. A fun side effect: I inspired at least five of my students to start their own NeoVim journeys!",
    type: "work",
    icon: Briefcase,
    photos: [1, 2].map((i) => `/about/timeline/nagpur_${i}.jpg`),
  },
  {
    year: "October '24 - February '25",
    title: "Winning the Job, Not the Prize",
    desc: "I competed in a hackathon hundreds of miles from home. Although our team didn't take home the prize, my performance caught the eye of the sponsoring company. They offered me a full-time role, even though I was still in my 7th semester, and so began my first corporate adventure as a Python Backend Developer in their R&D team.",
    type: "work",
    icon: Briefcase,
    photos: [1, 2].map((i) => `/about/timeline/centific_${i}.jpg`),
  },
  {
    year: "December 2024",
    title: "ICPC Regionals Qualifier",
    desc: "A proud moment as our team, 'Geeky Nerds', qualified for the ICPC 2024 regionals for both Amritapuri and Kanpur sites. We tackled 3 problems successfully at the Amrita regionals and were just shy of solving a fourth. It was a memorable journey of teamwork, learning, and pushing our limits in my final year of competitive programming.",
    type: "achievement",
    icon: Code,
    photos: ["/about/timeline/icpc.jpg"],
  },
  {
    year: "February '25 - Present",
    title: "Associate Software Engineer, CTO's Office",
    desc: "Joined ConsultAdd as an Associate Software Engineer, working directly with the CTO's Office. My current role involves pioneering new ideas by researching and building Proof of Concepts (PoCs), laying the groundwork for future innovation.",
    type: "work",
    icon: Briefcase,
    photos: ["/about/timeline/consultadd_1.jpeg"],
  },
];
