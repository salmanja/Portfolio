import type { PanelType } from "../Drawer/PanelContainer";

const STOP_ORDER: PanelType[] = ["about", "skills", "projects", "contact"];

export const PANEL_LABELS: Record<PanelType, string> = {
  about: "About Me",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};

interface NavigationHUDProps {
  activePanel: PanelType | null;
}

export default function NavigationHUD({ activePanel }: NavigationHUDProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        left: 16,
        zIndex: 1300,
        pointerEvents: "none",
        fontFamily: "system-ui, sans-serif",
        color: "#fff",
        textShadow: "0 1px 4px rgba(0,0,0,0.85)",
      }}
    >
      <nav style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
        {STOP_ORDER.map((id) => (
          <span
            key={id}
            style={{
              padding: "4px 10px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: activePanel === id ? 700 : 500,
              background:
                activePanel === id
                  ? "rgba(255, 255, 255, 0.95)"
                  : "rgba(0, 0, 0, 0.45)",
              color: activePanel === id ? "#111" : "#fff",
            }}
          >
            {PANEL_LABELS[id]}
          </span>
        ))}
      </nav>
      <p style={{ margin: 0, fontSize: 14 }}>
        Ride ↑ to the signs, then ← → between them
      </p>
    </div>
  );
}
