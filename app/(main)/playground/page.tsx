"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "@/public/avatar.svg";
import { ThemeSwitch } from "@/components/theme-switch";
import { SITEHEADER_LINKS } from "@/lib/site-header-links";

const SiteHeader = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = SITEHEADER_LINKS.findIndex((link) => link.href === pathname);
    setActiveIndex(index !== -1 ? index : 0);
  }, [pathname]);

  return (
    <header className="mx-auto flex max-w-2xl items-center justify-between px-3 py-6">
      <Link href="/" className="flex-shrink-0">
        <Image
          src={avatar}
          alt="avatar"
          width={35}
          height={35}
          className="rounded-full"
        />
      </Link>
      <div className="rounded-full border border-[rgb(247,247,248)] bg-[rgb(250,250,251)] p-0.5">
        <div className="relative flex w-[300px] rounded-full border border-black/5 bg-white bg-clip-padding shadow-[0px_1px_2px_-1px] shadow-black/5">
          {SITEHEADER_LINKS.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`relative z-20 flex-1 rounded-full px-4 py-1.5 text-center text-sm ${
                pathname === link.href
                  ? "font-[550]"
                  : "font-medium text-[var(--ds-gray-900)] hover:text-[var(--ds-gray-1000)]"
              }`}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {link.label}
            </Link>
          ))}
          <motion.div
            className="absolute inset-0 z-10 w-1/3 rounded-full bg-neutral-100"
            initial={false}
            animate={{ x: `${activeIndex * 100}%` }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden sm:block">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
