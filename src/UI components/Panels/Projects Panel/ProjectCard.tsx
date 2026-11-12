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
    <Card sx={{ position: "relative", width: "100%", color: "text.primary" }}>
      <CardHeader title={title} />
      {!expand && (
        <CardActions>
          <IconButton
            onClick={onToggle}
            sx={{
              position: "absolute",
              bottom: 2,
              right: 6,
              backgroundColor: "primary.main",
              color: "text.primary",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      )}

      <CollapseProject in={expand}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, p: 4 }}
        >
          <CardMedia
            component="img"
            image={media}
            sx={{ height: "auto", width: "100%" }}
          ></CardMedia>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            The challenge and my approach
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <IconButton
            onClick={onToggle}
            sx={{
              position: "absolute",
              bottom: 2,
              right: 6,
              backgroundColor: "primary.main",
              color: "text.primary",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <ExpandLessIcon />
          </IconButton>
        </CardContent>
      </CollapseProject>
    </Card>
  );
}
