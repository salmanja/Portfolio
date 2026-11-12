import type { PanelType } from "../Drawer/PanelContainer";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import { useTheme } from "@mui/material/styles";


const stop_order: PanelType[] = ["about", "skills", "projects", "contact"];

export const panel_labels: Record<PanelType, string> = {
  about: "About Me",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};

interface NavigationProps {
  activePanel: PanelType | null;
}

export default function NavigationMap({ activePanel }: NavigationProps) {

  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 16,
        left: 16,
        zIndex: 1300,
        pointerEvents: "none",
        backgroundColor: theme.custom.navigation.background,
        borderColor: theme.custom.navigation.border,
        padding: 2,
      }}
    >
      <Breadcrumbs
        separator=""
        aria-label="navigation-menu"
        sx={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 2 }}
      >
        {stop_order.map((id) => (
          <Typography
            variant="body1"
            key={id}
            sx={{
              padding: "4px 10px",
              borderRadius: 999,
              fontWeight: activePanel === id ? 700 : 500,
              backgroundColor:
                activePanel === id
                  ? "rgba(255, 255, 255, 0.95)"
                  : "rgba(0, 0, 0, 0.45)",
              color: activePanel === id ? theme.custom.navigation.text : "#fff",
              fontFamily: theme.custom.navigation.fontFamily,
            }}
          >
            {panel_labels[id]}
          </Typography>
        ))}
      </Breadcrumbs>
      <Typography
        variant="body1"
        sx={{ margin: 0, fontFamily: theme.custom.navigation.fontFamily }}
      >
        Ride ↑ to the signs, then ← → between them
      </Typography>
    </Box>
  );
}
