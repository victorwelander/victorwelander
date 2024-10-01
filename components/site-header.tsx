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
      <nav className="">
        <div className="flex items-center justify-center rounded-full border p-0.5 backdrop-blur">
          <div className="flex items-center gap-3">
            {SITEHEADER_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "relative block shrink-0 rounded-full px-4 py-1.5 text-sm font-[550]",
                  pathname === link.href
                    ? "bg-black text-[var(--geist-background)]"
                    : "text-[var(--ds-gray-900)] transition-colors duration-150 ease-in-out hover:bg-[#f7f7f6] hover:text-[var(--ds-foreground)]",
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
      </div>
    </header>
  );
};

export default SiteHeader;
