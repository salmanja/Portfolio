import type { ProximityTriggerProps } from "../../Types/types";
import { useFrame } from "@react-three/fiber";

export default function ProximityTrigger({
  horseRef,
  stopRefs,
  stops,
  visitStop,
}: ProximityTriggerProps) {

  return useFrame(() => {
    const horsePosition = horseRef.current?.position;
    if (horsePosition) {

      stopRefs.current.forEach((stopRef, i) => {
        if (stopRef) {
          const dist = horsePosition.distanceTo(stopRef.position);
          if (dist < 1.5) 
            visitStop(stops[i].id);
          }
      });
    }
  });
}
