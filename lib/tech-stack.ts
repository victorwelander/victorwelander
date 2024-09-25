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
  { icon: SiReact, text: "React", color: "#58C4DC" },
  { icon: SiExpress, text: "Express" },
];

const FRONTEND = [
  { icon: SiTypescript, text: "TypeScript", color: "#2F74C0" },
  { icon: SiJavascript, text: "JavaScript", color: "#E8D44E" },
  { icon: SiTailwindcss, text: "Tailwind CSS", color: "#38BDF9" },
  { icon: SiCss3, text: "CSS", color: "#1B6FB4" },
  { icon: SiFramer, text: "Framer Motion" },
];

const BACKEND = [
  { icon: SiNodedotjs, text: "Node.js", color: "#519942" },
  { icon: SiMongodb, text: "MongoDB", color: "#69A745" },
  { icon: SiMongoose, text: "Mongoose", color: "#F57A00" },
  { icon: SiPrisma, text: "Prisma", color: "#11384E" },
  { icon: SiPostgresql, text: "PostgreSQL", color: "#31648C" },
  { icon: SiMysql, text: "MySQL", color: "#E6900F" },
];

const DESIGN_TOOLS = [{ icon: SiFigma, text: "Figma", color: "#9C57F6" }];

const DEVELOPMENT_TOOLS = [
  { icon: SiVisualstudiocode, text: "Visual Studio Code", color: "#2AA1F1" },
  { icon: SiGithub, text: "Github" },
  { icon: SiOpenai, text: "ChatGPT" },
];

export { DEVELOPMENT_TOOLS, FRAMEWORKS, FRONTEND, BACKEND, DESIGN_TOOLS };
