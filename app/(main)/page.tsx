"use client";

import React from "react";
import Link from "next/link";
import SocialLinks from "@/components/social-links";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const HomePage = () => {
  return (
    <div className="mx-auto mb-6 mt-6 flex max-w-2xl flex-col px-3 py-2">
      <div className="mt-3">
        {/*
        <h1 className="tracking-tight font-medium text-4xl sm:text-5xl">
          Victor Welander
          <span className="font-extralight text-[var(--ds-gray-900)] text-3xl sm:text-4xl block text-balance">
            Web Developer & Design Engineer
          </span>
        </h1>
        */}
        <motion.div variants={container} initial="hidden" animate="show">
          <div className="text-[var(--ds-gray-900)] text-balance">
            <p className="mt-6 text-[15px]">
              Hi <span className="text-xl">👋🏻</span>, I&apos;m currently working
              on{" "}
              <Link
                href="https://geist.vercel.app/"
                target="_blank"
                rel="nofollow noreferrer"
                className="text-[var(--geist-link-color)]"
              >
                @Geist
              </Link>
              , a website with a collection of animated components.
            </p>
            <p className="mt-3 text-[length:var(--font-small)]"></p>
          </div>

          <div className="mt-3">
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
