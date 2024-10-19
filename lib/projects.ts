interface ProjectsProps {
  title?: string;
  description: string;
  logo?: string;
  github?: string;
  link?: string;
}

export const PROJECTS: ProjectsProps[] = [
  {
    description:
      "Geist is a collection of animated React components built with Framer motion and CSS.",
    logo: "https://geist.vercel.app/icons/geist-logo-light.svg",
    link: "https://geist.vercel.app",
  },
];
