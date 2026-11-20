import { Typography, Box, Divider } from "@mui/material";
import SkillCard from "./SkillCard";
import type { SkillCategories } from "../Panel Types/panelTypes";

const skillsCategories: SkillCategories[] = [
  {
    title: "Frontend",
    skills: [
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        alt: "React",
        title: "React",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        alt: "Angular",
        title: "Angular",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        alt: "TypeScript",
        title: "TypeScript",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
        title: "JavaScript",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg",
        alt: "Three.js",
        title: "Three.js",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        alt: "Redux",
        title: "Redux",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg",
        alt: "RxJS",
        title: "RxJS",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
        alt: "HTML5",
        title: "HTML5",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
        alt: "CSS3",
        title: "CSS3",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        alt: "Tailwind CSS",
        title: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        alt: "Node.js",
        title: "Node.js",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        alt: "Express.js",
        title: "Express.js",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
        alt: "Axios",
        title: "Axios",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
        alt: "MongoDB",
        title: "MongoDB",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
        alt: "PostgreSQL",
        title: "PostgreSQL",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg",
        alt: "Redis",
        title: "Redis",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        alt: "Firebase",
        title: "Firebase",
      },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
        alt: "Git",
        title: "Git",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        alt: "GitHub",
        title: "GitHub",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg",
        alt: "Postman",
        title: "Postman",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
        alt: "Cypress",
        title: "Cypress",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
        alt: "Jest",
        title: "Jest",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original-wordmark.svg",
        alt: "Vite",
        title: "Vite",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",
        alt: "Blender",
        title: "Blender",
      },
    ],
  },
  {
    title: "Deployment",
    skills: [
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
        alt: "Docker",
        title: "Docker",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
        alt: "Vercel",
        title: "Vercel",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
        alt: "Netlify",
        title: "Netlify",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
        alt: "Amazon Web Services",
        title: "Amazon Web Services",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
        alt: "Nginx",
        title: "Nginx",
      },
    ],
  },
];

export default function SkillsPanel() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        p: 4,
      }}
    >
      <Typography variant="h4" color="text.primary">
        My Tech Stack
      </Typography>

      <Divider sx={{ width: "100%" }} />

      {skillsCategories.map((skill) => (
        <Box
          key={skill.title}
          sx={{
            width: "100%",
            borderColor: "divider",
            borderRadius: 1,
          }}
        >
          <SkillCard skills={skill.skills} title={skill.title} />
        </Box>
      ))}
    </Box>
  );
}
