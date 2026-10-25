import type { SkillCategories } from "./Types/types";
import { Box, Card, CardHeader, CardContent } from "@mui/material";

export default function SkillCard({ title, skills }: SkillCategories) {
  return (
  
      <Card sx={{ position: "relative", width:"100%" }}>
        <CardHeader title={title} />
        <CardContent>
          {skills.map((icon) => (
            <Box key={icon.alt} sx={{display:"inline-block"}}>
              <Box
                component="img"
                src={icon.source}
                alt={icon.alt}
                title={icon.title}
                sx={{ width: 50, height: 50, objectFit: "contain", margin:2 }}
              />
            </Box>
          ))}
        </CardContent>
      </Card>
  );
}
