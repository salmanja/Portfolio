import HayStop from "./HayStop";
import TroughStop from "./TroughStop";
import type { StopsContainerProps} from "../../../Types/types";



export default function StopsContainer({
  visitStop
}: StopsContainerProps) {

  return (
    <>
      <HayStop id="about" visitStop={visitStop} />
      <TroughStop id="skills" visitStop={visitStop} />
    </>
  );
}
