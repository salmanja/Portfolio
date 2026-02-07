import HayStop from "./HayStop";
import TroughStop from "./TroughStop";

export default function StopsContainer({
  trailStopClicked,
  setIsActivePanel,
  isActivePanel,
}: {
  setIsActivePanel: (isActivePanel: boolean) => void;
  trailStopClicked: () => void;
  isActivePanel: boolean;
}) {
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
