import { Drawer } from "@mui/material";
import SkillsPanel from "../Panels/Skills Panel/SkillsPanel";


export default function PanelContainer({ isActivePanel, onPanelClose} : { isActivePanel: boolean; onPanelClose: () => void}) {


return (
  <Drawer
    anchor="right"
    open={isActivePanel}
    onClose={onPanelClose}
    sx={{
      "& .MuiDrawer-paper": {
        width: 500, 
      },
    }}
  >
    {isActivePanel && <SkillsPanel />}
  </Drawer>
);

}