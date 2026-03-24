import { FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { createElement, type ReactNode } from "react";

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface WorkExperience {
  company: string;
  duration: string;
  tasks: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string;
}

export interface TimelineEntry {
  label?: string;
  title: string;
}

// ── Data ───────────────────────────────────────────────
export const skills: Skill[] = [
  { name: "React", icon: createElement(FaReact) },
  { name: "Next.js", icon: createElement(RiNextjsFill) },
  { name: "Vue", icon: createElement(FaVuejs) },
  { name: "TypeScript", icon: createElement(SiTypescript) },
  { name: "Tailwind", icon: createElement(RiTailwindCssFill) },
  { name: "Node.js", icon: createElement(FaNodeJs) },
];

export const timelineEntries: TimelineEntry[] = [
  { label: "2022-04-01", title: "Internship at Comit" },
  { label: "2022-09-01", title: "Became Full-time Employee" },
  { title: "Frontend Developer" },
  { label: "2024-06-01", title: "VDTSol" },
  { label: "2025-01-01", title: "Minh Tri Thanh Academy JSC" },
];

export const workExperiences: WorkExperience[] = [
  {
    company: "Minh Tri Thanh Academy JSC",
    duration: "01/2025 - Present",
    tasks: [
      "Frontend Developer.",
      "- Build reusable components across the system.",
      "- Integrate and work with backend APIs.",
      "- Collaborate with BA and design teams.",
      "- Build landing pages and responsive web layouts.",
    ],
  },
  {
    company: "VDTSol",
    duration: "06/2023 - 12/2024",
    tasks: [
      "Frontend Developer.",
      "- Build reusable UI components.",
      "- Work with backend APIs.",
      "- Support interns in the frontend team.",
    ],
  },
  {
    company: "Comit Corporation",
    duration: "04/2022 - 05/2023",
    tasks: [
      "Intern → Full-time Employee.",
      "- Learn and assist in building internal systems.",
      "- Build reusable components.",
      "- Integrate and collaborate with backend developers.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AI Face Recognition Attendance System",
    description:
      "An AI-powered attendance system using facial recognition, reducing delays and improving monitoring for employees.",
    tech: "React.js, Material-UI, Context, WebSocket, React Router DOM",
  },
  {
    title: "PN-Stack",
    description:
      "An ERP system providing management solutions for warehouse, employees, sales, and analytics.",
    tech: "React.js, Ant Design, React Query",
  },
  {
    title: "ERP-SPACE",
    description:
      "An ERP platform for business management including inventory, HR, and sales statistics.",
    tech: "Vue 3, Ant Design, Pinia",
  },
];

export const bio = {
  name: "Doan Thanh Tung",
  description:
    "I'm a Frontend Developer with 2 years of experience in React and 1 year with Vue.js. I'm proficient in UI libraries such as Ant Design, Material UI, and Bootstrap, with strong knowledge of HTML, CSS, JavaScript, and TypeScript. I also have experience in web performance optimization, responsive design, and teamwork in Agile/Scrum environments.",
  github: "https://github.com/tungpro249",
  linkedin: "https://linkedin.com/in/t%C3%B9ng-%C4%91o%C3%A0n-3b1292236",
  education: {
    university: "University of Transport and Communications",
    major: "Computer Networks",
    english: "B1 (Intermediate)",
  },
};
