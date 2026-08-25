import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Group } from "three";
import PanelContainer from "./UI components/Drawer/PanelContainer";
import NavigationAssist from "./UI components/NavigationMap/NavigationAssist";
import Horse from "./ThreeD components/Horse/Horse";
import type { StopData } from "./Types/types";
import type { PanelType } from "./UI components/Drawer/PanelContainer";
import ProximityTrigger from "./Logic/ProximityTrigger";
import HorseController from "./Logic/HorseController";
import CameraController from "./Logic/CameraController";
import ForestModel from "./ThreeD components/Enviroment/Forest";

const stops: StopData[] = [
  { id: "about", x: -18, z: -8 },
  { id: "skills", x: -8, z: -8 },
  { id: "projects", x: 8, z: -8 },
  { id: "contact", x: 18, z: -8 },
];

function App() {
  const [isActivePanel, setIsActivePanel] = useState<PanelType | null>(null);
  const [isMoving, setIsMoving] = useState(false);
  const horseRef = useRef<Group>(null);
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

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavigationAssist activePanel={isActivePanel} />

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
            <HorseController keys={pressedKeysRefs} horseRef={horseRef} />
            <ProximityTrigger
              horseRef={horseRef}
              stops={stops}
              visitStop={setIsActivePanel}
            />
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
