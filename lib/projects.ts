interface ProjectsProps {
  name: string;
  description: string;
  image?: string;
  github?: string;
  link?: string;
  tags: string[];
}

export const PROJECTS: ProjectsProps[] = [
  {
    name: "Victor Welander",
    description:
      "My personal portfolio showcasing my projects and read about me.",
    link: "https://www.victorwelander.com/",
    github: "https://github.com/victorwelander/victorwelander",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    image: "/geist.png",
    name: "Geist Components",
    description:
      "Collection of Animated React components made with Framer motion and CSS.",
    link: "https://geist.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "MongoDB", "Mongoose"],
  },
];
