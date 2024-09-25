"use client";

import { SITEHEADER_LINKS } from "@/lib/site-header-links";
import Link from "next/link";
import React from "react";
import { SiNextdotjs, SiVercel } from "react-icons/si";
import { ThemeSwitch } from "./theme-switch";

const SiteFooter = () => {
  return (
    <footer className="mt-32 flex-none">
      <div className="mx-auto flex max-w-2xl flex-col px-3">
        <div className="border-[0.5px] border-[var(--accents-2)]" />
        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-6 text-sm font-medium mb-4">
          {SITEHEADER_LINKS.map((link, index) => (
            <Link key={index} href={link.href} className="font-medium text-sm">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="items-center flex flex-wrap gap-4">
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="nofollow"
              className="items-center flex gap-1 text-[var(--ds-gray-900)]"
            >
              Built with <SiNextdotjs className="size-4 inline" />
            </Link>
            <Link
              href="https://www.vercel.com"
              target="_blank"
              rel="nofollow"
              className="items-center flex gap-1 text-[var(--ds-gray-900)]"
            >
              Deployed on <SiVercel className="size-4 inline" />
            </Link>
            <div className="grow" />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
