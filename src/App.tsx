import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {OrbitControls, ScrollControls} from '@react-three/drei';
import FloorPane from "./ThreeD components/Trail";

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ScrollControls pages={4} damping={0.1}>
          <OrbitControls enabled={false} />

          <Suspense fallback={null}>
            <FloorPane />
          </Suspense>

          <ambientLight intensity={2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
