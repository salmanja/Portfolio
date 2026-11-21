import type { SkillCategories } from "../Panel Types/panelTypes";
import { Box, Card, CardHeader, CardContent } from "@mui/material";

export default function SkillCard({ title, skills }: SkillCategories) {
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
      <CardContent>
        {skills.map((icon) => (
          <Box key={icon.alt} sx={{ display: "inline-block" }}>
            <Box
              component="img"
              src={icon.source}
              alt={icon.alt}
              title={icon.title}
              sx={{ width: 70, height: 70, objectFit: "contain", margin: 2 }}
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
