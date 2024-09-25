import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="mx-auto mb-6 mt-6 flex max-w-2xl flex-col px-3 py-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-xl bg-[#EBEBEB]"
          >
            {/*
            <div className="my-2 flex items-center justify-between px-2">
              <div className="inline-flex h-[20px] flex-shrink-0 items-center justify-center gap-[4px] whitespace-nowrap rounded-full bg-black px-[8px] text-[11px] font-medium leading-none text-white">
                {project.domain}
              </div>
              <div className="inline-flex h-[20px] flex-shrink-0 items-center justify-center gap-[4px] whitespace-nowrap rounded-full bg-[#367EF8] px-[8px] text-[11px] font-medium leading-none text-white">
                {project.domain}
              </div>
            </div>
            */}

            <div className="relative h-48 w-full flex-shrink-0">
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                className="rounded-[12px] border object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                priority={index < 2}
              />
            </div>

            <div className="mt-auto flex flex-grow flex-col rounded-[12px] border bg-white">
              <div className="flex-grow px-2 py-2">
                <h3 className="text-[length:var(--font-small)] font-[600]">
                  {project.name}
                </h3>
                <p className="mt-1 text-[length:var(--font-small)] leading-5 text-[var(--ds-gray-900)]">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-[6px] border border-[var(--accents-2)] px-1 text-[length:var(--font-extra-small)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 px-2">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full flex-1 pb-2"
                  >
                    <Button className="w-full" shape="full" size="sm">
                      View Live
                    </Button>
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full flex-1 pb-2"
                  >
                    <Button
                      variant="secondary"
                      className="w-full"
                      shape="full"
                      size="sm"
                    >
                      Github
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
