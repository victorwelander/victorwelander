import { SOCIAL_LINKS } from "@/lib/social-links";
import Link from "next/link";
import React from "react";

const SocialBlocks = () => {
  return (
    <div className="flex items-center gap-3">
      {SOCIAL_LINKS.map((social, index) => (
        <Link
          href={social.href}
          key={index}
          className="h-[100px] w-full rounded-2xl border border-[rgb(247,247,248)] bg-[rgb(250,250,251)] p-2"
        >
          <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-xl border border-black/5 bg-white bg-clip-padding p-4 shadow-[0px_1px_2px_-1px] shadow-black/5">
            <social.icon />
            <p className="mt-1 text-sm text-[var(--ds-gray-900)]">
              {social.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialBlocks;
