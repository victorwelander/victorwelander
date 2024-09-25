import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";
import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

interface AboutSection {
  title: string;
  text: string | ReactNode;
}

const ABOUT: AboutSection[] = [
  {
    title: "Introduction",
    text: `Hi, I'm Victor, a Danish self-taught web developer. I like to
      build components, and I care deeply about the user interface and
      user experience.`,
  },
  {
    title: "How it started",
    text: `In 2019, I began making scripts and plugins in Minecraft, which
      sparked my interest in programming. I continued with this for about
      a year before losing interest in Minecraft.`,
  },
  {
    title: "Rediscovering Coding",
    text: `After taking a break from coding for about four years, I
      rediscovered my passion for programming through web development in
      August 2023.`,
  },
  {
    title: "First Website",
    text: (
      <>
        I started by learning HTML and CSS, quickly advancing to React and
        Next.js, where I discovered the potential of modern web development. In
        January 2024, I built and published my first website,{" "}
        <span className="inline-flex items-center gap-1">
          <a
            href="https://filmexplore.netlify.app/"
            className="text-[var(--geist-link-color)] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Film Explore
          </a>
          <ExternalLink className="text-[var(--ds-gray-900)]" size={14} />
        </span>
        , an app to discover movies through genres, categories, and search.
      </>
    ),
  },
  {
    title: "Exploring Full-Stack Development",
    text: `I realized that web development was definitely for me, so I started
      exploring different areas. I dove into full-stack development and
      learned how to implement authentication and various types of
      integrations in web apps.`,
  },
  {
    title: "Discovering Design Engineering",
    text: (
      <div>
        In July 2024, I discovered a website called{" "}
        <span className="inline-flex items-center gap-1">
          <a
            href="https://animations.dev/"
            className="text-[var(--geist-link-color)] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            animations.dev
          </a>{" "}
          <ExternalLink className="mr-1 text-[var(--ds-gray-900)]" size={14} />{" "}
        </span>
        created by{" "}
        <span className="inline-flex items-center gap-1">
          <a
            href="https://x.com/emilkowalski_"
            className="text-[var(--geist-link-color)] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emil Kowalski
          </a>
          <ExternalLink className="text-[var(--ds-gray-900)]" size={14} />{" "}
        </span>
        . It featured a lot of smooth interactions and components made with
        Framer Motion, which led me into Design Engineering. I found this field
        very fascinating and delved deeper into &quot;Design Engineering,&quot;
        realizing that this is the field I am truly passionate about.
      </div>
    ),
  },
];

const TECHSTACK = [
  { icon: SiNodedotjs, text: "Node.js" },
  { icon: SiNextdotjs, text: "Next.js" },
  { icon: SiReact, text: "React" },
  { icon: SiTypescript, text: "TypeScript" },
  { icon: SiJavascript, text: "JavaScript" },
  { icon: SiTailwindcss, text: "Tailwind CSS" },
  { icon: SiCss3, text: "CSS" },
  { icon: SiFramer, text: "Framer Motion" },
  { icon: SiMongodb, text: "MongoDB" },
  { icon: SiMongoose, text: "Mongoose" },
  { icon: SiExpress, text: "Express" },
  { icon: SiPrisma, text: "Prisma" },
  { icon: SiPostgresql, text: "PostgreSQL" },
  { icon: SiMysql, text: "MySQL" },
];

const DESIGN_TOOLS = [{ icon: SiFigma, text: "Figma" }];

const DEVELOPMENT_TOOLS = [
  { icon: SiVisualstudiocode, text: "Visual Studio Code" },
  { icon: SiGithub, text: "Github" },
  { icon: SiOpenai, text: "ChatGPT" },
];

export { ABOUT, TECHSTACK, DEVELOPMENT_TOOLS };
