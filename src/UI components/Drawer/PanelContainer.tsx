import { Drawer } from "@mui/material";
import SkillsPanel from "../Panels/Skills Panel/SkillsPanel";
import AboutPanel from "../Panels/About Panel/AboutPanel";
import type { PanelID } from "../../Types/types";

const componentsMap ={
  about : AboutPanel,
  skills : SkillsPanel
}

export default function PanelContainer({ isActivePanel, onPanelClose} : { isActivePanel: PanelID; onPanelClose: () => void}) {

const ActiveComponent = componentsMap[isActivePanel];
return (
  <Drawer
    anchor="right"
    open={Boolean(isActivePanel)}
    onClose={onPanelClose}
    sx={{
      "& .MuiDrawer-paper": {
        width: 500, 
      },
    }}
  >
    {ActiveComponent && <ActiveComponent />}
  </Drawer>
);

}