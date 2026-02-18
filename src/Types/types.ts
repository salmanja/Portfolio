export type PanelID = "about" | "skills";

export interface PanelContainerProps {
    isActivePanel: PanelID | null;
    onPanelClose: () => void;
} 
export interface StopsContainerProps {
visitStop: (panelID: PanelID) => void;
}
export interface StopProps {
    visitStop: (panelID: PanelID) => void;
    id: PanelID;
}