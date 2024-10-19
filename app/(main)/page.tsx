"use client";

import React from "react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/social-links";
import { PROJECTS } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";

export default function Component() {
  return (
    <div className="mx-auto mb-6 mt-6 flex max-w-2xl flex-col px-6 py-2">
      <h1 className="text-[length:var(--font-small)] font-[600]">
        Victor Welander
      </h1>
      <p className="text-[length:var(--font-extra-small)] text-[var(--ds-gray-900)]">
        Web Developer
      </p>
      <div className="mt-6">
        <p className="text-[length:var(--font-small)] font-[450] text-[var(--ds-gray-900)]">
          Hi I&apos;m currently working on{" "}
          <Link
            href="https://geist.vercel.app/"
            target="_blank"
            rel="nofollow noreferrer"
            className="text-[var(--geist-link-color)]"
          >
            @Geist
          </Link>
          , a website with a collection of animated React components built with
          Framer motion and CSS.
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        {SOCIAL_LINKS.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            className="flex cursor-pointer items-center text-[length:var(--font-small)] font-[450] text-[var(--ds-gray-900)] underline duration-100 hover:text-[var(--geist-foreground)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{social.name}</span>
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="mb-2 text-[length:var(--font-small)] font-[600]">
          Projects
        </h2>
        {PROJECTS.map((project, index) => {
          const projectLink = project.link || project.github || "#";
          return (
            <Link
              key={index}
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 block rounded-lg p-2 duration-200 hover:bg-[var(--accents-1)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {project.logo && (
                    <img
                      width={80}
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="rounded-sm"
                    />
                  )}
                </div>
                <div className="flex space-x-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--ds-gray-900)] hover:text-[var(--geist-foreground)]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="size-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  {project.link && (
                    <div className="text-[var(--ds-gray-900)] hover:text-[var(--geist-foreground)]">
                      <ExternalLink className="size-4" />
                      <span className="sr-only">External Link</span>
                    </div>
                  )}
                </div>
              </div>
              <p className="mt-2 text-[length:var(--font-extra-small)] text-[var(--ds-gray-900)]">
                {project.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
