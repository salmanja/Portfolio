/// TASKS
/// child component !!!!!DONE!!!!!
/// array of objects and map, title/ media/ description !!!!!DONE!!!!
/// toggle state
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
  },
  {
    title: "AuraHealth",
    alt: "AuraHealth",
    media: "demo",
    description: "What i built/ what it solved/ how i solved it(what i used)",
  },
  {
    title: "Verifywise",
    alt: "Verifywise",
    media: "demo",
    description: "What i built/ what it solved/ how i solved it(what i used)",
  },
  {
    title: "Barn finds",
    alt: "Barn finds",
    media: "demo",
    description: "What i built/ what it solved/ how i solved it(what i used)",
  },
  {
    title: "NoteFolio",
    alt: "NoteFolio",
    media: "demo",
    description: "What i built/ what it solved/ how i solved it(what i used)",
  },
];

export default function ProjectsPanel() {
  const [expandProjectDetails, setExpandProjectDetails] = useState(false);
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
          <ProjectCard title={project.title} alt={project.alt} media={project.media} description={project.description} />
        </Box>
      ))}
    </Box>
  );
}
