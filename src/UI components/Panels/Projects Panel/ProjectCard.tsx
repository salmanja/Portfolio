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
import { Collapse as CollapseProject } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import type { ProjectData } from "./Types/types";

export default function ProjectCard({title, media, description} : ProjectData) {
  return (
    <Card sx={{ position: "relative" }}>
      <CardHeader title={title} />
      <CardActions>
        <IconButton sx={{ position: "absolute", bottom: 2, right: 6 }}>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <CollapseProject>
        <CardContent>
          <CardMedia>{media}</CardMedia>
          <Typography>{description}</Typography>
          <IconButton sx={{ position: "absolute", bottom: 2, right: 6 }}>
            <ExpandLessIcon />
          </IconButton>
        </CardContent>
      </CollapseProject>
    </Card>
  );
}
