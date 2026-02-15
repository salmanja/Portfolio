export interface PanelContainerProps {
    isActivePanel: boolean;
    onPanelClose: () => void;
} 
export interface StopsContainerProps {
  trailStopClicked: () => void;
  setIsActivePanel: (isActivePanel: boolean) => void;
  isActivePanel: boolean;
}
export interface StopProps {
    visitStop: () => void;
}