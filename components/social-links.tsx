import { SOCIAL_LINKS } from "@/lib/social-links";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {SOCIAL_LINKS.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          className="flex cursor-pointer items-center text-[var(--accents-5)] duration-100 hover:text-[var(--geist-foreground)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <social.icon className="text-sm" />
          <span className="ml-2 text-sm">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
