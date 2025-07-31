"use client";

import React, { useState, FC } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { NAV_LINKS } from "../constants";

const Navigation: FC = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const handleLinkClick = () => setNavOpen(false);

  return (
    <>
      <MenuIcon isOpen={isNavOpen} onClick={() => setNavOpen(!isNavOpen)} />
      <AnimatePresence>
        {isNavOpen && <NavbarPanel onLinkClick={handleLinkClick} />}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

interface MenuIconProps {
  isOpen: boolean;
  onClick: () => void;
}
const MenuIcon: FC<MenuIconProps> = ({ isOpen, onClick }) => (
  <motion.button
    onClick={onClick}
    animate={isOpen ? "open" : "closed"}
    initial="closed"
    className="fixed top-6 right-4 z-[60] h-10 w-10 cursor-pointer"
    aria-label="Toggle menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      className="h-full w-full"
    >
      <motion.path
        stroke="#f05454"
        strokeWidth={3}
        strokeLinecap="round"
        variants={topPathVariants}
      />
      <motion.path
        stroke="#f05454"
        strokeWidth={3}
        strokeLinecap="round"
        d="M 2 15 L 28 15"
        variants={middlePathVariants}
      />
      <motion.path
        stroke="#f05454"
        strokeWidth={3}
        strokeLinecap="round"
        variants={bottomPathVariants}
      />
    </svg>
  </motion.button>
);

interface NavbarPanelProps {
  onLinkClick: () => void;
}
const NavbarPanel: FC<NavbarPanelProps> = ({ onLinkClick }) => (
  <motion.div
    variants={menuVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
    className="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-dark text-white"
  >
    <motion.ul
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-y-8"
    >
      {NAV_LINKS.map((link) => (
        <motion.li key={link.title} variants={linkVariants}>
          <NavItem
            title={link.title}
            href={link.href}
            external={link.external}
            onClick={onLinkClick}
          />
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

interface NavItemProps {
  title: string;
  href: string;
  external?: boolean;
  onClick: () => void;
}
const NavItem: FC<NavItemProps> = ({ title, href, external, onClick }) => {
  const linkClasses =
    "group relative block overflow-hidden p-2 text-6xl font-bold uppercase text-slate-300";

  const content = (
    <>
      <div className="absolute top-[-50%] left-0 h-full w-full -translate-x-[101%] bg-[#f05454] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
      <div className="absolute top-[50%] left-0 h-full w-full translate-x-[101%] bg-[#f05454] transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
      <span className="relative transition-colors duration-200 group-hover:text-white tracking-wider">
        {title}
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={linkClasses}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={linkClasses}>
      {content}
    </Link>
  );
};

const topPathVariants: Variants = {
  closed: { d: "M 2 8 L 28 8" },
  open: { d: "M 5 22 L 25 2" },
};
const middlePathVariants: Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};
const bottomPathVariants: Variants = {
  closed: { d: "M 2 22 L 28 22" },
  open: { d: "M 5 2 L 25 22" },
};

const menuVariants: Variants = {
  hidden: { y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
  visible: { y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};
const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const linkVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};
