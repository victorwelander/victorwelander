"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PROJECTS } from "@/lib/projects";
import { container, item } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ProjectSkeleton = () => (
  <div className="flex h-full flex-col overflow-hidden">
    <Skeleton className="aspect-video w-full bg-[var(--accents-2)]" />
    <div className="flex flex-grow flex-col pt-2">
      <Skeleton className="mb-2 h-5 w-3/4 bg-[var(--accents-2)]" />
      <Skeleton className="mb-2 h-4 w-full bg-[var(--accents-2)]" />
      <div className="mb-2 flex flex-wrap gap-2">
        {[1, 2, 3].map((_, index) => (
          <Skeleton key={index} className="h-5 w-16 bg-[var(--accents-2)]" />
        ))}
      </div>
    </div>
    <div className="mt-auto flex items-center gap-2 pt-2">
      <Skeleton className="h-8 flex-1 bg-[var(--accents-2)]" />
      <Skeleton className="h-8 flex-1 bg-[var(--accents-2)]" />
    </div>
  </div>
);

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto mb-6 mt-6 flex max-w-2xl flex-col px-3 py-2">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.section variants={item} className="group/item relative mt-6">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
            {isLoading
              ? PROJECTS.map((_, index) => <ProjectSkeleton key={index} />)
              : PROJECTS.map((project, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--accents-2)]"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                      <Image
                        src={project.image}
                        alt="project-image"
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="flex flex-grow flex-col p-2 pt-2">
                      <div className="line-clamp-1 text-sm font-medium transition group-hover:text-sky-700 md:text-base">
                        {project.name}
                      </div>
                      <p className="text-xs text-[var(--ds-gray-900)]">
                        {project.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="focus:ring-ring flex items-center justify-center rounded-md border border-[var(--accents-2)] px-2.5 py-0.5 text-center text-xs font-medium text-[var(--ds-gray-900)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto flex items-center gap-2 px-2">
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full flex-1 pb-2"
                        >
                          <Button className="w-full" size="sm">
                            View Live
                          </Button>
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full flex-1 pb-2"
                        >
                          <Button
                            variant="secondary"
                            className="w-full"
                            size="sm"
                          >
                            Github
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
