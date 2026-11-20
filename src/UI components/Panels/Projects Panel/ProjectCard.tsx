import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";
import { Collapse as CollapseProject } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import type { ProjectData } from "../Panel Types/panelTypes";

export default function ProjectCard({
  title,
  media,
  description,
  stack,
  expand,
  onToggle,
}: ProjectData) {
  const isVideo = media.endsWith(".mp4") || media.endsWith(".webm");

  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        padding: 1,
        color: "text.primary",
        backgroundColor: "background.section",
      }}
    >
      <CardHeader title={title} />
      {stack.map((tech) => (
        <Chip key={tech} label={tech} variant="outlined" />
      ))}

      {!expand && (
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <IconButton
            onClick={onToggle}
            sx={{
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              border: 1,
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
            component={isVideo ? "video" : "img"}
            src={media}
            autoPlay={isVideo}
            loop={isVideo}
            muted={isVideo}
            controls={isVideo}
            sx={{
              height: "auto",
              width: "100%",
            }}
          ></CardMedia>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {description}
          </Typography>
          <IconButton
            onClick={onToggle}
            sx={{
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              border: 1,
              alignSelf: "flex-end",
            }}
          >
            <ExpandLessIcon />
          </IconButton>
        </CardContent>
      </CollapseProject>
    </Card>
  );
}
