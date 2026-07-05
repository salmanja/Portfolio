import type { ProximityTriggerProps } from "../Types/types";
import type { PanelType } from "../UI components/Drawer/PanelContainer";
import { useFrame } from "@react-three/fiber";
import { useEffect, useCallback, useRef } from "react";
import { debounce } from "lodash";

export default function ProximityTrigger({
  horseRef,
  stopRefs,
  stops,
  visitStop,
}: ProximityTriggerProps) {
  const activeStopId = useRef<PanelType | null>(null);

  const debouncedEnter = useCallback(
    debounce((id: PanelType) => {
      visitStop(id);
    }, 300),
    [visitStop],
  );

  const debouncedExit = useCallback(
    debounce(() => {
      visitStop(null);
    }, 300),
    [visitStop],
  );

  useEffect(() => {
    return () => {
      debouncedEnter.cancel();
      debouncedExit.cancel();
    };
  },[debouncedEnter, debouncedExit]);

  useFrame(() => {
    const horsePosition = horseRef.current?.position;
    if (!horsePosition) return;

    let isNearNewStop = false;
    let isInBufferZone = false;

    stopRefs.current.forEach((stopRef, i) => {
      if (!stopRef || isNearNewStop) return;

      const stopId = stops[i].id;
      const dist = horsePosition.distanceTo(stopRef.position);

      if (dist < 1.5) {
        isNearNewStop = true;
        if (activeStopId.current !== stopId) {
          activeStopId.current = stopId;
          debouncedEnter(stopId);
          debouncedExit.cancel();
        }
        isInBufferZone = true;
      }

      if (dist < 1.6 && activeStopId.current === stopId) {
        isInBufferZone = true;
      }
    });
    if (!isNearNewStop && !isInBufferZone && activeStopId.current !== null) {
      activeStopId.current = null;
      debouncedExit();
      debouncedEnter.cancel();
    }
  })
  return null;
}
