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

const FRAMEWORKS = [
  { icon: SiNextdotjs, text: "Next.js" },
  { icon: SiReact, text: "React" },
  { icon: SiExpress, text: "Express" },
];

const FRONTEND = [
  { icon: SiTypescript, text: "TypeScript" },
  { icon: SiJavascript, text: "JavaScript" },
  { icon: SiTailwindcss, text: "Tailwind CSS" },
  { icon: SiCss3, text: "CSS" },
  { icon: SiFramer, text: "Framer Motion" },
];

const BACKEND = [
  { icon: SiNodedotjs, text: "Node.js" },
  { icon: SiMongodb, text: "MongoDB" },
  { icon: SiMongoose, text: "Mongoose" },
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

export { DEVELOPMENT_TOOLS, FRAMEWORKS, FRONTEND, BACKEND, DESIGN_TOOLS };
