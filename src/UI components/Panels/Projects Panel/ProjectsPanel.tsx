import { Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import type { ProjectData } from "../Panel Types/panelTypes";
import ProjectCard from "./ProjectCard";

const projectsData: ProjectData[] = [
  {
    title: "Bluewater Imaging",
    alt: "Bluewater Imaging",
    media: "/projects/demos/bluewater-imaging-demo.mp4",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    stack: ["PHP", "Javascript", "HTML", "CSS"],
    expand: false,
    onToggle: () => {},
  },
  {
    title: "AuraHealth",
    alt: "AuraHealth",
    media: "/projects/demos/aurahealth-demo.mp4",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    stack: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    expand: false,
    onToggle: () => {},
  },
  {
    title: "Verifywise",
    alt: "Verifywise",
    media: "/projects/images/coming-soon.jpg",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    stack: ["React", "Typescript", "Javascript", "Python", "PostgreSQL"],
    expand: false,
    onToggle: () => {},
  },
  {
    title: "Barn finds",
    alt: "Barn finds",
    media: "/projects/images/coming-soon.jpg",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    stack: ["React", "Typescript", "Node.js"],
    expand: false,
    onToggle: () => {},
  },
  {
    title: "NoteFolio",
    alt: "NoteFolio",
    media: "./projects/images/coming-soon.jpg",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    stack: ["Angular", "Typescript", "Node.js", "Express.js", "Electron", "Firebase"],
    expand: false,
    onToggle: () => {},
  },
];

export default function ProjectsPanel() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setExpandedProject((prevTitle) => {
      return prevTitle === title ? null : title;
    });
  };
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
        My work
      </Typography>
      <Divider sx={{ width: "100%" }} />

      {projectsData.map((project) => (
        <Box
          key={project.alt}
          sx={{
            width: "100%",
            borderColor: "divider",
            borderRadius: 1,
          }}
        >
          <ProjectCard
            expand={expandedProject === project.title}
            onToggle={() => handleToggle(project.title)}
            title={project.title}
            alt={project.alt}
            media={project.media}
            stack={project.stack}
            description={project.description}
          />
        </Box>
      ))}
    </Box>
  );
}
