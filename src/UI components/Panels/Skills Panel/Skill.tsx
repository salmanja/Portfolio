import { Box } from "@mui/material";
import type {SkillData}  from "./Types/types";


export default function Skill({ source, alt, title }: SkillData) {
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
