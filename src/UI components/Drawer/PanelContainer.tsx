import { Drawer } from "@mui/material";
import { useState } from "react";

import AboutPanel from "../Panels/About Me Panel/AboutPanel"

export default function PanelContainer({ isActivePanel} : { isActivePanel: boolean }) {

const [isOpen, setIsOpen] =  useState(isActivePanel);


return (
  <Drawer
    anchor="right"
    open={isOpen}
    onClose={() => setIsOpen(!isOpen)}
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