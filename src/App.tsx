import { Canvas} from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Trail from "./ThreeD components/Navigation/Trail";
import PanelContainer from "./UI components/Drawer/PanelContainer";
import StopsContainer from "./ThreeD components/Navigation/Stops/StopsContainer";
import type { PanelID, HorseProps, StopData } from "./Types/types";
import Horse from "./ThreeD components/Horse/Horse";

function App() {
  const [isActivePanel, setIsActivePanel] = useState<PanelID | null>(null);
  const [horsePosition, setHorsePosition] = useState<HorseProps["horsePosition"]>({ x:0, y: 0, z: 0 });

  const stops: StopData[] = [{ id: 'about', position: [-2, 0, 0]}];

  const horseRef = useRef<Mesh>();
  const stopRefs = useRef<Mesh>([]);


  const handleKeyDown = (event: KeyboardEvent)=>{
    if(event.key ==="ArrowUp"){
      console.log(event.key);
      setHorsePosition((prev)=>({...prev, z:prev.z - 1}));
    } else if(event.key === "ArrowDown"){
      console.log(event.key);
      setHorsePosition((prev)=>({...prev, z:prev.z + 1}));
    } else if(event.key === "ArrowLeft"){
      console.log(event.key);
      setHorsePosition((prev) => ({...prev, x:prev.x - 1}))
    } else if(event.key === "ArrowRight"){
      console.log(event.key);
      setHorsePosition((prev)=>({...prev, x:prev.x + 1}));
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);


  const openPanel = (panelID: PanelID) => {
    setIsActivePanel(panelID);
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>

      {isActivePanel && <PanelContainer 
      onPanelClose={() => setIsActivePanel(null)}
      isActivePanel={isActivePanel} /> }


      <Canvas>
        <ScrollControls pages={4} damping={0.1}>
          <OrbitControls enabled={false} />

          <Suspense fallback={null}>
            <Horse ref={horseRef} horsePosition={horsePosition} />
            <Trail />
            <StopsContainer ref={stopRefs} stops={stops} visitStop={openPanel}
            />
          </Suspense>

          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
