/// TASKS
/// child component !!!!!DONE!!!!!
/// array of objects and map, title/ media/ description !!!!!DONE!!!!
/// toggle state !!!!DONE!!!!!!
/// right aligned icon button !!!!!DONE!!!!!
/// fill the media with video or images

import { Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import type { ProjectData } from "./Types/types";
import ProjectCard from "./ProjectCard";

const projectsData: ProjectData[] = [
  {
    title: "Bluewater Imaging",
    alt: "Bluewater Imaging",
    media: "https://placehold.co/600x400/000000/FFFFFF/png",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    expand: false,
    onToggle: () => {},
  },
  {
    title: "AuraHealth",
    alt: "AuraHealth",
    media: "https://placehold.co/600x400/000000/FFFFFF/png",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    expand: false,
    onToggle: () => {},
  },
  {
    title: "Verifywise",
    alt: "Verifywise",
    media: "https://placehold.co/600x400/000000/FFFFFF/png",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    expand: false,
    onToggle: () => {},
  },
  {
    title: "Barn finds",
    alt: "Barn finds",
    media: "https://placehold.co/600x400/000000/FFFFFF/png",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    expand: false,
    onToggle: () => {},
  },
  {
    title: "NoteFolio",
    alt: "NoteFolio",
    media: "https://placehold.co/600x400/000000/FFFFFF/png",
    description: "What i built/ what it solved/ how i solved it(what i used)",
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
        justifyContent:"center",
        alignItems:"center",
        flexDirection: "column",
        gap: 4,
        p: 4,
      }}
    >
        <Typography variant="h4">My work</Typography>
        <Divider sx={{ width: "100%" }} />
      
      {projectsData.map((project) => (
        <Box key={project.alt}>
          <ProjectCard
            expand={expandedProject === project.title}
            onToggle={() => handleToggle(project.title)}
            title={project.title}
            alt={project.alt}
            media={project.media}
            description={project.description}
          />
        </Box>
      ))}
    </Box>
  );
}
