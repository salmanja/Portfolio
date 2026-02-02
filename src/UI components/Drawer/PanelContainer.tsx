import { Drawer } from "@mui/material";

import AboutPanel from "../Panels/About Panel/AboutPanel"

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
    {isActivePanel && <AboutPanel />}
  </Drawer>
);

}