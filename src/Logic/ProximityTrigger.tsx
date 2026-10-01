import type { ProximityTriggerProps } from "../Types/types";
import type { PanelType } from "../UI components/Drawer/PanelContainer";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { panel_labels } from "../UI components/NavigationMap/NavigationMap";

const trigger_radius = 10;
const exit_delay_ms = 300;
const label_y = 2;

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

    const inZone = nearestStop !== null && nearestDist < trigger_radius;
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
    } else if (now - exitAt.current >= exit_delay_ms) {
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
            position={[0, label_y, 0]}
            center
            zIndexRange={[100, 0]}
            style={{ pointerEvents: "none" }}
          >
            <Box sx={{ textAlign: "center", whiteSpace: "nowrap" }}>
              <Typography
                sx={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 48,
                  fontWeight: 400,
                  color: "#fff",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.85)",
                }}
              >
                {panel_labels[stop.id]}
              </Typography>
            </Box>
          </Html>
        </group>
      ))}
    </>
  );
}
