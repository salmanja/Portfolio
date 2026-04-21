import type { StopsContainerProps} from "../../../Types/types";
import Stop from "./Stop";
import {forwardRef} from 'react';


const StopsContainer = forwardRef(({
  visitStop, stops
}: StopsContainerProps, ref) => {

  return (
    <>
   {stops.map((stop)=>
    <Stop ref={ref} key={stop.id} visitStop={visitStop} id={stop.id} position={stop.position} />)}
    </>
  );
})
export default StopsContainer;
