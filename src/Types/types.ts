import { Group } from "three";
import type {PanelType} from "../UI components/Drawer/PanelContainer";

export interface PanelContainerProps {
    isActivePanel: PanelType | null;
    onPanelClose: () => void;
} 

// Stop positions are in world space (same coords as the horse).
export interface StopData {
  id: PanelType;
  x: number;
  z: number;
}

export interface ProximityTriggerProps {
  horseRef: React.RefObject<Group | null>;
  stops: StopData[];
  visitStop: (panelID: PanelType | null) => void;
}

export interface HorseControllerProps {
  keys: React.RefObject<Set<string>>;
  horseRef: React.RefObject<Group | null>;
}
export interface CameraControllerProps {
  horseRef: React.RefObject<Group | null>;
}
export interface HorseProps {
  isMoving: boolean;
}