import { SwipeableDrawer } from "@mui/material";
import SkillsPanel from "../Panels/Skills Panel/SkillsPanel";
import AboutPanel from "../Panels/About Panel/AboutPanel";
import type { PanelContainerProps } from "../../Types/types";

const componentsMap ={
  about : AboutPanel,
  skills : SkillsPanel
}

export default function PanelContainer({ isActivePanel, onPanelClose, onPanelOpen } :  PanelContainerProps ) {

const ActiveComponent = componentsMap[isActivePanel];
return (
  <SwipeableDrawer
    anchor="right"
    open={Boolean(isActivePanel)}
    onOpen={onPanelOpen}
    onClose={onPanelClose}
    sx={{
      "& .MuiDrawer-paper": {
        width: 500,
        overflowY: "visible",
      },
      "& .MuiBackdrop-root": {
        display: "none",
      },
    }}
    slotProps={{
      backdrop: {
        invisible: true,
      }
    }}
    disableSwipeToOpen={false}
    transitionDuration={{ enter: 500, exit: 500 }}
  >
    {ActiveComponent && <ActiveComponent />}
  </SwipeableDrawer>
);

}