/// TASKS
/// child component
/// array of objects and map, title/ media/ description !!!!!DONE!!!!
/// toggle state
/// right aligned icon button !!!!!DONE!!!!!
/// fill the media with video or images 

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Collapse as CollapseProject } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import type { ProjectData } from "./Types/types";

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
        <Card sx={{ position: "relative" }}>
          <CardHeader title={project.title} />
          <CardActions>
            <IconButton sx={{ position: "absolute", bottom: 2, right: 6 }}>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <CollapseProject>
            <CardContent>
              <CardMedia>{project.media}</CardMedia>
              <Typography>
                {project.description}
              </Typography>
              <IconButton sx={{ position: "absolute", bottom: 2, right: 6 }}>
                <ExpandLessIcon />
              </IconButton>
            </CardContent>
          </CollapseProject>
        </Card>
        </Box>
      ))}
    </Box>
  );
}
