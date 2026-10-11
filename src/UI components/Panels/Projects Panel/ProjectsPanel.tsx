/// TASKS
/// child component !!!!!DONE!!!!!
/// array of objects and map, title/ media/ description !!!!!DONE!!!!
/// toggle state !!!!DONE!!!!!!
/// right aligned icon button !!!!!DONE!!!!!
/// fill the media with video or images 

import { Box } from "@mui/material";
import { useState } from "react";
import type { ProjectData } from "./Types/types";
import ProjectCard from "./ProjectCard";

const projectsData: ProjectData[] = [
  {
    title: "Bluewater Imaging",
    alt: "Bluewater Imaging",
    media: "demo",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    expand: false,
    onToggle: () => {},
  },
  {
    title: "AuraHealth",
    alt: "AuraHealth",
    media: "demo",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    expand: false,
    onToggle: () => {},
  },
  {
    title: "Verifywise",
    alt: "Verifywise",
    media: "demo",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    expand: false,
    onToggle: () => {},
  },
  {
    title: "Barn finds",
    alt: "Barn finds",
    media: "demo",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    expand: false,
    onToggle: () => {},
  },
  {
    title: "NoteFolio",
    alt: "NoteFolio",
    media: "demo",
    description: "What i built/ what it solved/ how i solved it(what i used)",
    expand: false,
    onToggle: () => {},
  },
];

export default function ProjectsPanel() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

    const handleToggle = (title:string) =>{
        setExpandedProject((prevTitle) =>{
        return prevTitle === title ? null : title; 
      });
    }
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        p: 4,
      }}
    >
      {projectsData.map((project) => (
        <Box key={project.alt}>
          <ProjectCard expand={expandedProject === project.title} onToggle={()=> handleToggle(project.title)} title={project.title} alt={project.alt} media={project.media} description={project.description} />
        </Box>
      ))}
    </Box>
  );
}
