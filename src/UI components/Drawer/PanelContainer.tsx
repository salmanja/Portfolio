import {useState, useEffect} from "react";
import { Drawer, Box } from "@mui/material";
import SkillsPanel from "../Panels/Skills Panel/SkillsPanel";
import AboutPanel from "../Panels/About Panel/AboutPanel";
import ContactPanel from "../Panels/Contact Panel/ContactPanel";
import ProjectsPanel from "../Panels/Projects Panel/ProjectsPanel";
import type { PanelContainerProps } from "../../Types/types";

const componentsMap ={
  about : AboutPanel,
  skills : SkillsPanel,
  contact: ContactPanel,
  projects: ProjectsPanel,
} as const;

export type PanelType = keyof typeof componentsMap;

export default function PanelContainer({ isActivePanel, onPanelClose} :  PanelContainerProps ) {

  const [lastPanel, setLastPanel] = useState<PanelType |null>(isActivePanel);

  useEffect(() =>{
    if (isActivePanel) {
      setLastPanel(isActivePanel);
    }
  }, [isActivePanel]);

const ActiveComponent = lastPanel ? componentsMap[lastPanel] : null;

return (
  <Drawer
    anchor="right"
    open={!!isActivePanel}
    onClose={onPanelClose}
    transitionDuration={{ enter: 500, exit: 500, appear:500 }}
    keepMounted
    sx={{
      zIndex: 1400,
      "& .MuiDrawer-paper": {
        width: 500,
        boxSizing: "border-box",
        overflowY: "auto",
      },
    }}
    slotProps={{
      backdrop: {
        invisible: true,
      },
    }}
  >

    <Box sx={{ width: 500, height: "100%" }}>
      {ActiveComponent && <ActiveComponent />}
    </Box>
    
  </Drawer>
);

}