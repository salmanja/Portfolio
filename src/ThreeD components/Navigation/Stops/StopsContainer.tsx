import HayStop from "./HayStop";
import TroughStop from "./TroughStop";
import type { StopsContainerProps } from "../../../Types/types";

export default function StopsContainer({
  trailStopClicked,
  setIsActivePanel,
  isActivePanel,
}: StopsContainerProps) {
  const handleStopClick = () => {
    trailStopClicked();
    setIsActivePanel(!isActivePanel);
  };
  return (
    <>
      <HayStop visitStop={handleStopClick} />
      <TroughStop visitStop={handleStopClick} />
    </>
  );
}
