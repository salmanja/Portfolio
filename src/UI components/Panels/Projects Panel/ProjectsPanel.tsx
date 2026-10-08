/// TASKS
/// child component
/// array of objects and map
/// toggle state
/// right aligned icon button

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
      {/* MASTER VERSION */}
      <Card sx={{ position: "relative" }}>
        <CardHeader title="Bluewater Imaging" />
        <CardActions>
          <IconButton sx={{ position: "absolute", bottom: 2, right: 6 }}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <CollapseProject>
          <CardContent>
            <CardMedia>Demo</CardMedia>
            <Typography>
              What i built/ what it solved/ how i solved it(what i used)
            </Typography>
            <IconButton sx={{ position: "absolute", bottom: 2, right: 6 }}>
              <ExpandLessIcon />
            </IconButton>
          </CardContent>
        </CollapseProject>
      </Card>

      <Card>
        <CardHeader title="AuraHealth" />
        <CardActions>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <CollapseProject>
          <CardContent>
            <CardMedia>Demo</CardMedia>
            <Typography>
              What i built/ what it solved/ how i solved it(what i used)
            </Typography>
            <IconButton>
              <ExpandLessIcon />
            </IconButton>
          </CardContent>
        </CollapseProject>
      </Card>

      <Card>
        <CardHeader title="Verifywise" />
        <CardActions>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <CollapseProject>
          <CardContent>
            <CardMedia>Demo</CardMedia>
            <Typography>
              What i built/ what it solved/ how i solved it(what i used)
            </Typography>
            <IconButton>
              <ExpandLessIcon />
            </IconButton>
          </CardContent>
        </CollapseProject>
      </Card>

      <Card>
        <CardHeader title="Barn finds" />
        <CardActions>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <CollapseProject>
          <CardContent>
            <CardMedia>Demo</CardMedia>
            <Typography>
              What i built/ what it solved/ how i solved it(what i used)
            </Typography>
            <IconButton>
              <ExpandLessIcon />
            </IconButton>
          </CardContent>
        </CollapseProject>
      </Card>

      <Card>
        <CardHeader title="NoteFolio" />
        <CardActions>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <CollapseProject>
          <CardContent>
            <CardMedia>Demo</CardMedia>
            <Typography>
              What i built/ what it solved/ how i solved it(what i used)
            </Typography>
            <IconButton>
              <ExpandLessIcon />
            </IconButton>
          </CardContent>
        </CollapseProject>
      </Card>
    </Box>
  );
}
