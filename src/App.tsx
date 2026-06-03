import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Mesh } from "three";
import Trail from "./ThreeD components/Navigation/Trail";
import PanelContainer from "./UI components/Drawer/PanelContainer";
import StopsContainer from "./ThreeD components/Navigation/Stops/StopsContainer";
import Horse from "./ThreeD components/Horse/Horse";
import type { StopData } from "./Types/types";
import type { PanelType } from "./UI components/Drawer/PanelContainer";
import ProximityTrigger from "./Logic/ProximityTrigger";
import HorseController from "./Logic/HorseController";

function App() {
  const [isActivePanel, setIsActivePanel] = useState<PanelType | null>(null);
  const [isMoving, setIsMoving] = useState(false);

  const stops: StopData[] = [{ id: "about", position: [-2, 0, 0] }];

  const horseRef = useRef<Mesh>(null);
  const stopRefs = useRef<(Mesh | null)[]>([]);

  const pressedKeysRefs= useRef<Set<string>>(new Set());

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
            <Horse ref={horseRef} isMoving={isMoving} />
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
            <HorseController keys={pressedKeysRefs} horseRef={horseRef} />
          </Suspense>

          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
