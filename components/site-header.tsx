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
      <div className="flex items-center">
        <div className="hidden sm:block">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
