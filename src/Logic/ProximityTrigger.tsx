import type { ProximityTriggerProps } from "../Types/types";
import type { PanelType } from "../UI components/Drawer/PanelContainer";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PANEL_LABELS } from "../UI components/HUD/NavigationHUD";

const TRIGGER_RADIUS = 10;
const EXIT_DELAY_MS = 300;
const LABEL_Y = 2;

export default function ProximityTrigger({
  horseRef,
  stops,
  visitStop,
}: ProximityTriggerProps) {
  const activeStopId = useRef<PanelType | null>(null);
  const exitAt = useRef<number | null>(null);

  useFrame(() => {
    const horse = horseRef.current;
    if (!horse) return;

    const { x: hx, z: hz } = horse.position;
    let nearestStop: PanelType | null = null;
    let nearestDist = Infinity;

    for (const stop of stops) {
      const dist = Math.hypot(hx - stop.x, hz - stop.z);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestStop = stop.id;
      }
    }

    const inZone = nearestStop !== null && nearestDist < TRIGGER_RADIUS;
    const now = performance.now();

    if (inZone) {
      exitAt.current = null;
      if (activeStopId.current !== nearestStop) {
        activeStopId.current = nearestStop;
        visitStop(nearestStop);
      }
      return;
    }

    if (activeStopId.current === null) return;

    if (exitAt.current === null) {
      exitAt.current = now;
    } else if (now - exitAt.current >= EXIT_DELAY_MS) {
      exitAt.current = null;
      activeStopId.current = null;
      visitStop(null);
    }
  });

  return (
    <>
      {stops.map((stop) => (
        <group key={stop.id} position={[stop.x, -1, stop.z]}>
          <Html
            position={[0, LABEL_Y, 0]}
            center
            sprite={false}
            transform={false}
            zIndexRange={[100, 0]}
            style={{ pointerEvents: "none" }}
          >
            <div
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 48,
                fontWeight: 400,
                color: "#fff",
                textAlign: "center",
                whiteSpace: "nowrap",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.85)",
              }}
            >
              {PANEL_LABELS[stop.id]}
            </div>
          </Html>
        </group>
      ))}
    </>
  );
}
