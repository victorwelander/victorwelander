"use client";

import SocialLinks from "@/components/social-links";
import { ABOUT } from "@/lib/about";
import {
  BACKEND,
  DESIGN_TOOLS,
  DEVELOPMENT_TOOLS,
  FRAMEWORKS,
  FRONTEND,
} from "@/lib/tech-stack";
import { container, item } from "@/lib/variants";
import { motion } from "framer-motion";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mx-auto mb-6 mt-6 flex max-w-2xl flex-col px-3 py-2">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.header
          variants={item}
          className="flex items-start justify-between"
        >
          <div className="flex flex-col justify-center">
            <h1 className="font-[500] text-[var(--geist-foreground)]">
              Victor Welander
            </h1>
            <p className="mt-1 text-sm">Web Developer</p>
          </div>
          <SocialLinks />
        </motion.header>

        <motion.section variants={item} className="group/item relative mt-6">
          {ABOUT.map((section, index) => (
            <motion.article key={index}>
              <h2 className="mt-4 text-[0.875rem] font-[600]">
                {section.title}
              </h2>
              <div className="mt-1 text-[0.875rem] leading-5 text-[var(--ds-gray-900)]">
                {section.text}
              </div>
            </motion.article>
          ))}
        </motion.section>
      </motion.div>

      <hr className="my-4 border-[0.5px] border-[var(--accents-2)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        <motion.section variants={item}>
          <h2 className="text-[0.875rem] font-[600]">Frontend</h2>
          <ul
            role="list"
            className="mt-1 flex flex-wrap items-center gap-4 gap-y-2 text-[var(--ds-gray-900)]"
          >
            {FRAMEWORKS.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <item.icon />
                <span className="text-[0.875rem] font-[600]">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <hr className="my-4 border-[0.5px] border-[var(--accents-2)]" />

        <motion.section variants={item}>
          <h2 className="text-[0.875rem] font-[600]">Frontend</h2>
          <ul
            role="list"
            className="mt-1 flex flex-wrap items-center gap-4 gap-y-2 text-[var(--ds-gray-900)]"
          >
            {FRONTEND.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <item.icon />
                <span className="text-[0.875rem] font-[600]">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <hr className="my-4 border-[0.5px] border-[var(--accents-2)]" />

        <motion.section variants={item}>
          <h2 className="text-[0.875rem] font-[600]">Backend</h2>
          <ul
            role="list"
            className="mt-1 flex flex-wrap items-center gap-4 gap-y-2 text-[var(--ds-gray-900)]"
          >
            {BACKEND.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <item.icon />
                <span className="text-[0.875rem] font-[600]">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <hr className="my-4 border-[0.5px] border-[var(--accents-2)]" />

        <motion.section variants={item}>
          <h2 className="text-[0.875rem] font-[600]">Design</h2>
          <ul
            role="list"
            className="mt-1 flex flex-wrap items-center gap-4 gap-y-2 text-[var(--ds-gray-900)]"
          >
            {DESIGN_TOOLS.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <item.icon />
                <span className="text-[0.875rem] font-[600]">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <hr className="my-4 border-[0.5px] border-[var(--accents-2)]" />

        <motion.section variants={item}>
          <h2 className="text-[0.875rem] font-[600]">Development Tools</h2>
          <ul
            role="list"
            className="mt-1 flex flex-wrap items-center gap-4 gap-y-2 text-[var(--ds-gray-900)]"
          >
            {DEVELOPMENT_TOOLS.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <item.icon />
                <span className="text-[0.875rem] font-[600]">{item.text}</span>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <svg
                height="24"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="24"
              >
                <path
                  clipRule="evenodd"
                  d="M9.50321 5.5H13.2532C13.3123 5.5 13.3704 5.5041 13.4273 5.51203L9.51242 9.42692C9.50424 9.36912 9.5 9.31006 9.5 9.25L9.5 5.5L8 5.5L8 9.25C8 10.7688 9.23122 12 10.75 12H14.5V10.5L10.75 10.5C10.6899 10.5 10.6309 10.4958 10.5731 10.4876L14.4904 6.57028C14.4988 6.62897 14.5032 6.68897 14.5032 6.75V10.5H16.0032V6.75C16.0032 5.23122 14.772 4 13.2532 4H9.50321V5.5ZM0 5V5.00405L5.12525 11.5307C5.74119 12.3151 7.00106 11.8795 7.00106 10.8822V5H5.50106V9.58056L1.90404 5H0Z"
                  className="fill-[var(--ds-gray-900)]"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="text-[0.875rem] font-[600]">Vercel AI</span>
            </li>
          </ul>
        </motion.section>
      </motion.div>

      <hr className="my-4 border-[0.5px] border-[var(--accents-2)]" />
    </div>
  );
};

export default AboutPage;
