"use client";

import { INSTAGRAM_URL, LINKEDIN_URL } from "@/app/data/socials";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const socials = [
  {
    name: "LinkedIn",
    link: LINKEDIN_URL,
    icon: <FaLinkedin />,
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Instagram",
    link: INSTAGRAM_URL,
    icon: <FaInstagram />,
    color: "hover:text-[#E1306C]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ContactPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-dark p-4 font-sans text-text-body">
      <motion.div
        className="grid w-full max-w-5xl grid-cols-1 gap-8 rounded-2xl border border-steel bg-dark p-8 shadow-2xl shadow-black/30 md:grid-cols-2 md:gap-16 md:p-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col justify-center"
          variants={itemVariants}
        >
          <h1 className="bg-gradient-to-r from-light to-accent bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always
            open. Feel free to reach out directly at{" "}
            <a
              href="mailto:talktoanmol@outlook.com"
              className="font-semibold text-accent transition-all duration-300 hover:text-light hover:underline"
            >
              talktoanmol@outlook.com
            </a>
            .
          </p>
          <div className="mt-10 flex space-x-4">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-4xl text-light/80 transition-colors duration-300 ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          variants={itemVariants}
          action="https://formspree.io/f/mnnzzzrb"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="mb-2 block font-medium text-light">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full rounded-lg border-2 border-transparent bg-steel/50 px-4 py-3 text-light transition-all duration-300 placeholder:text-text-body/60 focus:border-accent focus:bg-steel/70 focus:outline-none focus:ring-0"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-light"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full rounded-lg border-2 border-transparent bg-steel/50 px-4 py-3 text-light transition-all duration-300 placeholder:text-text-body/60 focus:border-accent focus:bg-steel/70 focus:outline-none focus:ring-0"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-light"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="block w-full rounded-lg border-2 border-transparent bg-steel/50 px-4 py-3 text-light transition-all duration-300 placeholder:text-text-body/60 focus:border-accent focus:bg-steel/70 focus:outline-none focus:ring-0"
              placeholder="Your message..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(240, 84, 84, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-red-600 px-6 py-3.5 text-lg font-bold text-white shadow-lg"
          >
            Send Message <FiArrowRight className="text-xl" />
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
