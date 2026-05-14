import type { RefObject } from "react";
import { Mesh } from "three";
import type {PanelType} from "../UI components/Drawer/PanelContainer";

export interface PanelContainerProps {
    isActivePanel: PanelType | null;
    onPanelClose: () => void;
} 

//what is a stop in App.tsx? this is its defintion. data only
export interface StopData {
  id: PanelType;
  position: [number, number, number];
}

//this is for the container to render ALL stops, it needs the array and the behavior
export interface StopsContainerProps {
visitStop: (panelID: PanelType | null) => void;
stops: StopData[];
stopRefs: RefObject<(Mesh | null)[]>;
}

//this is what the stop component needs, data and behavior
export interface StopProps {
    visitStop: (panelID: PanelType | null) => void;
    id: PanelType;
    position: [number, number, number];
}

export interface HorseProps {
    horsePosition: {x:number, y:number, z:number};
}

export interface ProximityTriggerProps {
  horseRef: React.RefObject<Mesh | null>;
  stopRefs: React.RefObject<(Mesh | null)[]>;
  stops: StopData[];
  visitStop: (panelID: PanelType | null) => void;
}
export interface HorseControllerProps {
  setHorsePosition: React.Dispatch<React.SetStateAction<{x:number, y:number, z:number}>>;
  keys: Set<string>;
}