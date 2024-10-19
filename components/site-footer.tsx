"use client";

import { SITEHEADER_LINKS } from "@/lib/site-header-links";
import Link from "next/link";
import React from "react";
import { SiNextdotjs, SiVercel } from "react-icons/si";

const SiteFooter = () => {
  return (
    <footer className="mt-32 flex-none">
      <div className="mx-auto flex max-w-2xl flex-col px-6 pb-16 pt-10">
        <div className="border-[0.5px] border-[var(--accents-2)]" />
        <div className="mb-4 mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium">
          {SITEHEADER_LINKS.map((link, index) => (
            <Link key={index} href={link.href} className="text-sm font-medium">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-muted-foreground text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="nofollow"
              className="flex items-center gap-1 text-[var(--ds-gray-900)]"
            >
              Built with <SiNextdotjs className="inline size-4" />
            </Link>
            <Link
              href="https://www.vercel.com"
              target="_blank"
              rel="nofollow"
              className="flex items-center gap-1 text-[var(--ds-gray-900)]"
            >
              Deployed on <SiVercel className="inline size-4" />
            </Link>
            <div className="grow" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
