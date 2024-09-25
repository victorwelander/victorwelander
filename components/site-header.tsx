"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SITEHEADER_LINKS } from "@/lib/site-header-links";
import Image from "next/image";
import avatar from "@/public/avatar.svg";
import { ThemeSwitch } from "./theme-switch";
import MobileNav from "./mobile-nav";

const SiteHeader = () => {
  const pathname = usePathname();

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
      <nav className="hidden sm:block">
        <div className="flex items-center justify-center rounded-full border border-[var(--accents-2)] px-3 shadow-sm backdrop-blur">
          <div className="flex items-center">
            {SITEHEADER_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "relative block shrink-0 px-3 py-2 text-sm font-medium",
                  pathname === link.href
                    ? "text-[var(--ds-foreground)]"
                    : "text-[var(--ds-gray-900)] duration-100 hover:text-[var(--ds-foreground)]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="flex items-center">
        <div className="hidden sm:block">
          <ThemeSwitch />
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default SiteHeader;
