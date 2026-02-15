import { Box } from "@mui/material";

interface SkillProps {
  source: string;
  alt: string;
  title: string;
}

export default function Skill({ source, alt, title }: SkillProps) {
  return (
    <Box
      sx={
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        } as any
      }
    >
      <img
        src={source}
        alt={alt}
        title={title}
        style={{ width: 100, height: 100, objectFit: "contain" }}
      />
    </Box>
  );
}
