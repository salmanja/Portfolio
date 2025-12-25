import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Suspense } from "react";
import { OrbitControls} from '@react-three/drei';
import FloorPane from "./components/FloorPane";

function App() {
const [isDragging, _setIsDragging] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <OrbitControls enabled={isDragging} />

        <Suspense fallback={null}>
          <FloorPane />
        </Suspense>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
      </Canvas>
    </div>
  );
}

export default App;
