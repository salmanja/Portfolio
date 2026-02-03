import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Trail from "./ThreeD components/Navigation/Trail";
import PanelContainer from "./UI components/Drawer/PanelContainer";
import TrailStop from "./ThreeD components/Navigation/TrailStop";

function App() {
 // all my components array

  const [isActivePanel, setIsActivePanel] = useState<boolean>(false);

  const togglePanel = () =>{
    setIsActivePanel(!isActivePanel);
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>

      {isActivePanel && <PanelContainer 
      onPanelClose={togglePanel}
      isActivePanel={isActivePanel} /> }


      <Canvas>
        <ScrollControls pages={4} damping={0.1}>
          <OrbitControls enabled={false} />

          <Suspense fallback={null}>
            <Trail />
            <TrailStop trailStopClicked={togglePanel}
            setIsActivePanel={setIsActivePanel}
            isActivePanel={isActivePanel} 
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
