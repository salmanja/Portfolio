import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Mesh } from "three";
import Trail from "./ThreeD components/Navigation/Trail";
import PanelContainer from "./UI components/Drawer/PanelContainer";
import StopsContainer from "./ThreeD components/Navigation/Stops/StopsContainer";
import Horse from "./ThreeD components/Horse/Horse";
import type { HorseProps, StopData } from "./Types/types";
import type { PanelType } from "./UI components/Drawer/PanelContainer";
import ProximityTrigger from "./Logic/ProximityTrigger";
import HorseController from "./Logic/HorseController";

function App() {
  const [isActivePanel, setIsActivePanel] = useState<PanelType | null>(null);
  const [horsePosition, setHorsePosition] = useState<
    HorseProps["horsePosition"]
  >({ x: 0, y: 0, z: 0 });
  const [horseRotation, setHorseRotation] = useState<HorseProps["horseRotation"]>({x:0, y:0, z:0});

  const stops: StopData[] = [{ id: "about", position: [-2, 0, 0] }];

  const horseRef = useRef<Mesh>(null);
  const stopRefs = useRef<(Mesh | null)[]>([]);

  const pressedKeys: Set<string> = new Set();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      pressedKeys.add(event.key);
    }
  };
  const handleKeyUp = (event:KeyboardEvent) =>{
    pressedKeys.delete(event.key);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  const openPanel = (panelID: PanelType | null) => {
    setIsActivePanel(panelID);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PanelContainer
        onPanelClose={() => setIsActivePanel(null)}
        isActivePanel={isActivePanel}
      />

      <Canvas>
        <ScrollControls pages={4} damping={0.1}>
          <OrbitControls enabled={false} />

          <Suspense fallback={null}>
            <Horse ref={horseRef} horsePosition={horsePosition} horseRotation={horseRotation} />
            <Trail />
            <StopsContainer
              stopRefs={stopRefs}
              stops={stops}
              visitStop={openPanel}
            />
            <ProximityTrigger
              horseRef={horseRef}
              stopRefs={stopRefs}
              stops={stops}
              visitStop={openPanel}
            />
            <HorseController setHorsePosition={setHorsePosition} keys={pressedKeys} setHorseRotation={setHorseRotation}/>
          </Suspense>

          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
