import type { ProximityTriggerProps, PanelID } from "../../Types/types";
import { useFrame } from "@react-three/fiber";
import {useEffect, useCallback, useRef} from "react";
import { debounce } from "lodash";


export default function ProximityTrigger({
  horseRef,
  stopRefs,
  stops,
  visitStop,
}: ProximityTriggerProps) {

  const activeStopId = useRef<PanelID | null>(null);

  const debouncedEnter = useCallback(
    debounce((id: PanelID) =>
    {
      console.log("triggered!!!!!")
      visitStop(id);
    }, 300),
    [visitStop]
  )

  const debouncedExit = useCallback(
    debounce(()=>{
      console.log("exiting stop");
      visitStop(null);
    },300),
    [visitStop]
  )

  useEffect(()=>{
    return(()=>{
      debouncedEnter.cancel();
      debouncedExit.cancel();
    })
  })

  return useFrame(() => {
    const horsePosition = horseRef.current?.position;
    if (!horsePosition) return;

    let isNearNewStop = false;
    let isInBufferZone = false;
    
    stopRefs.current.forEach((stopRef, i) => {
        if (!stopRef || isNearNewStop) return;

        const stopId = stops[i].id;
        const dist = horsePosition.distanceTo(stopRef.position);

        if (dist < 1.5){
         isNearNewStop = true;
         if(activeStopId.current !== stopId){
          activeStopId.current = stopId;
          debouncedEnter(stopId);
          debouncedExit.cancel();
         }
         isInBufferZone = true;
        }

        if(dist < 1.8 && activeStopId.current === stopId){
          isInBufferZone = true;
        }
      });
      if (!isNearNewStop && !isInBufferZone && activeStopId.current !== null){
      activeStopId.current = null;
      debouncedExit();
      debouncedEnter.cancel();
    }
   
  });
  return null;
}
