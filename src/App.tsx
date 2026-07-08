import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Mesh } from "three";
import PanelContainer from "./UI components/Drawer/PanelContainer";
import StopsContainer from "./ThreeD components/Navigation/Stops/StopsContainer";
import Horse from "./ThreeD components/Horse/Horse";
import type { StopData } from "./Types/types";
import type { PanelType } from "./UI components/Drawer/PanelContainer";
import ProximityTrigger from "./Logic/ProximityTrigger";
import HorseController from "./Logic/HorseController";
import CameraController from "./Logic/CameraController";
import ForestModel from "./ThreeD components/Enviroment/Forest";

function App() {
  const [isActivePanel, setIsActivePanel] = useState<PanelType | null>(null);
  const [isMoving, setIsMoving] = useState(false);

  const stops: StopData[] = [
    { id: "about", position: [-1799.518, -2960.037, -1361.369] },
    { id: "skills", position: [-3472.365, -2922.324, -4498.574] },
    { id: "projects", position: [1784.051, -3209.467, -4377.05] },
    { id: "contact", position: [4009.328, -2922.27, -2841.715] },
  ];

  const horseRef = useRef<Mesh>(null);
  const stopRefs = useRef<(Mesh | null)[]>([]);

  const pressedKeysRefs = useRef<Set<string>>(new Set());

  useEffect(() => {
    let timeoutId: number;
    const keyboardKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (keyboardKeys.includes(event.key)) {
        pressedKeysRefs.current.add(event.key);
        clearTimeout(timeoutId);
        setIsMoving(true);
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      pressedKeysRefs.current.delete(event.key);
      clearTimeout(timeoutId);

      if (pressedKeysRefs.current.size === 0) {
        timeoutId = setTimeout(() => {
          setIsMoving(false);
          clearTimeout(timeoutId);
        }, 500);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      clearTimeout(timeoutId);
    };
  }, []);

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
            <ForestModel />
            <Horse ref={horseRef} isMoving={isMoving} />
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
            <HorseController keys={pressedKeysRefs} horseRef={horseRef} />
            <CameraController horseRef={horseRef} />
          </Suspense>

          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
