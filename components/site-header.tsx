"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SITEHEADER_LINKS } from "@/lib/site-header-links";
import Image from "next/image";
import avatar from "@/public/avatar.svg";
import { ThemeSwitch } from "./theme-switch";

const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between mx-auto max-w-2xl px-3 py-6">
      <Link href="/">
        <Image
          src={avatar}
          alt="avatar"
          width={35}
          height={35}
          className="rounded-full"
        />
      </Link>
      <div className="flex items-center shadow-sm backdrop-blur justify-center border px-3 border-[var(--accents-2)] rounded-full">
        <div className="flex items-center">
          {SITEHEADER_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "font-medium text-sm relative block px-3 py-2 shrink-0",
                pathname === link.href
                  ? "text-[var(--ds-foreground)]"
                  : "text-[var(--ds-gray-900)] hover:text-[var(--ds-foreground)] duration-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <ThemeSwitch />
    </header>
  );
};

export default SiteHeader;
