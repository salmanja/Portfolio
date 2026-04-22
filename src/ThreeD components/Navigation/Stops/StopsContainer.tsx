import type { StopsContainerProps} from "../../../Types/types";
import Stop from "./Stop";



export default function StopsContainer ({
  visitStop, stops, stopRefs
}: StopsContainerProps){

  return (
    <>
   {stops.map((stop, i)=>
    <Stop 
    ref={(el)=> { 
      if (el !== null) 
      {
        stopRefs.current[i] = el;
      }}} 
      key={stop.id} visitStop={visitStop} id={stop.id} position={stop.position} />)}
    </>
  );
}

