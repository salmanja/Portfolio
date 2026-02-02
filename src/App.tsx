import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Trail from "./ThreeD components/Trail";
import { Button } from "@mui/material";
import AboutPanel from "./UI components/Panels/About Me Panel/AboutPanel";

function App() {
 // all my components array

  const [isActivePanel, setIsActivePanel] = useState(false);

  const togglePanel = () =>{
    setIsActivePanel(!isActivePanel);
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>


      {/* mock button to toggle panel/null */}
      <Button color="primary" onClick={togglePanel}>
        {isActivePanel ? "Hide Panel" : "Show Panel"}
      </Button>

      {isActivePanel ? <AboutPanel /> : null}


      <Canvas>
        <ScrollControls pages={4} damping={0.1}>
          <OrbitControls enabled={false} />

          <Suspense fallback={null}>
            <Trail />
          </Suspense>

          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
