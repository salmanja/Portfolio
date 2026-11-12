import { Typography, Box, Divider } from "@mui/material";
import SkillCard from "./SkillCard";
import type { SkillData, SkillCategories } from "./Types/types";

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
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg",
        alt: "Three.js",
        title: "Three.js",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        alt: "TypeScript",
        title: "TypeScript",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        alt: "Angular",
        title: "Angular",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
        alt: "HTML5",
        title: "HTML5",
      },
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
        title: "JavaScript",
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
    ],
  },
  {
    title: "Databases",
    skills: [],
  },
  {
    title: "Tools & Tesing",
    skills: [
      {
        source:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
        alt: "Git",
        title: "Git",
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
    skills: [],
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
        gap: 4,
        p: 4,
      }}
    >
      <Typography variant="h4" color="text.primary" gutterBottom>
        My Tech Stack
      </Typography>

      <Divider sx={{ width: "100%" }} />

      {skillsCategories.map((skill) => (
        <Box
          key={skill.title}
          sx={{
            width: "100%",
            backgroundColor: "background.section",
            padding: 1,
            borderColor: "divider",
          }}
        >
          <SkillCard skills={skill.skills} title={skill.title} />
        </Box>
      ))}
    </Box>
  );
}
