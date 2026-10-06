import {Typography, Box, Divider} from "@mui/material";
import Skill from "./Skill";
import type {SkillData}  from "./Types/types";

const skillsData: SkillData[] = [
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
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    alt: "Git",
    title: "Git",
  },
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
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
    title: "TypeScript",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg",
    alt: "Three.js",
    title: "Three.js",
  },
  {
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",
    alt: "Blender",
    title: "Blender",
  },
];

const boxStyles = {
  display: "grid",
  gap: 4,
  mt: 8,
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
} as any

const skillStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function SkillsPanel() {
  return (
    <Box sx={{ p: 8, alignItems: "center", textAlign: "center" }}>
      <Typography variant="h6" gutterBottom sx={{marginBottom: 2}}>
        My speciality is Javascript-based web development, from React frontends to Node.js and Express backends. 
      </Typography>

      <Divider sx={{width: "100%" }} />

        <Box
        component="section"
        sx={boxStyles}
        >
            {skillsData.map((skill) => (
                <Box key={skill.alt} sx={skillStyles}>
                    <Skill source={skill.source} alt={skill.alt} title={skill.title}/>
                </Box>
            ))}
        </Box>

    </Box>
  );
}
