import type { StopsContainerProps} from "../../../Types/types";
import Stop from "./Stop";


export default function StopsContainer({
  visitStop, stops
}: StopsContainerProps) {

  return (
    <>
   {stops.map((stop)=>
    <Stop key={stop.id} visitStop={visitStop} id={stop.id} position={stop.position} />)}
    </>
  );
}
