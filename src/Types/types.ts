import type { RefObject } from "react";
import { Mesh } from "three";

export type PanelID = "about" | "skills" | null;

export interface PanelContainerProps {
    isActivePanel: PanelID | null;
    onPanelClose: () => void;
} 

//what is a stop in App.tsx? this is its defintion. data only
export interface StopData {
  id: PanelID;
  position: [number, number, number];
}

//this is for the container to render ALL stops, it needs the array and the behavior
export interface StopsContainerProps {
visitStop: (panelID: PanelID) => void;
stops: StopData[];
stopRefs: RefObject<(Mesh | null)[]>;
}

//this is what the stop component needs, data and behavior
export interface StopProps {
    visitStop: (panelID: PanelID) => void;
    id: PanelID;
    position: [number, number, number];
}

export interface HorseProps {
    horsePosition: {x:number, y:number, z:number};
}

export interface ProximityTriggerProps {
  horseRef: React.RefObject<Mesh | null>;
  stopRefs: React.RefObject<(Mesh | null)[]>;
  stops: StopData[];
  visitStop: (panelID: PanelID) => void;
}