import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { Collapse as CollapseProject } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import type { ProjectData } from "./Types/types";

export default function ProjectCard({
  title,
  media,
  description,
  expand,
  onToggle,
}: ProjectData) {
  return (
    <Card sx={{ position: "relative" }}>
      <CardHeader title={title} />

      {!expand && (
        <CardActions>
          <IconButton
            onClick={onToggle}
            sx={{ position: "absolute", bottom: 2, right: 6 }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      )}

      <CollapseProject in={expand}>
        <CardContent>
          <CardMedia>{media}</CardMedia>
          <Typography>{description}</Typography>
          <IconButton
            onClick={onToggle}
            sx={{ position: "absolute", bottom: 2, right: 6 }}
          >
            <ExpandLessIcon />
          </IconButton>
        </CardContent>
      </CollapseProject>
    </Card>
  );
}
