"use client";

import React from "react";
import Link from "next/link";
import SocialLinks from "@/components/social-links";
import { motion } from "framer-motion";
import { container } from "@/lib/variants";
import ContributionGraph from "@/components/contribution/contribution-graph";
import SocialBlocks from "@/components/social-blocks";

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
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Victor Welander
          <span className="block text-balance text-2xl font-light text-[var(--ds-gray-900)] sm:text-3xl">
            Web Developer
          </span>
        </h1>
        <motion.div variants={container} initial="hidden" animate="show">
          <div className="text-[var(--ds-gray-900)]">
            <p className="mt-6 text-[15px]">
              Hi I&apos;m currently working on{" "}
              <Link
                href="https://geist.vercel.app/"
                target="_blank"
                rel="nofollow noreferrer"
                className="text-[var(--geist-link-color)]"
              >
                @Geist
              </Link>
              , a website with a collection of animated React components made
              built with Framer motion and CSS.
            </p>
            <p className="mt-3 text-[length:var(--font-small)]"></p>
          </div>

          <SocialBlocks />

          <div className="mt-6">
            <ContributionGraph />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
