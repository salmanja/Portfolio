import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Suspense } from "react";
import { OrbitControls} from '@react-three/drei';
import FirstScene from "./components/testing/FirstScene";

function App() {
const [isDragging, _setIsDragging] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        {/* setup the orthographic default camera 
        <OrthographicCamera 
        makeDefault
        position={[0, 40, 200]}
        zoom={1}
        left={-5}
        right={5}
        top={5}
        bottom={-5}
        />
        {/* orbit controls for mouse control 
        <OrbitControls
        minZoom={10}
        maxZoom={50}
        enabled={!isDragging}
        />
        <mesh>
          <boxGeometry args={[2,2,2]} />
          <meshStandardMaterial />
        </mesh>
        */}
        <OrbitControls minZoom={10} maxZoom={50} enabled={!isDragging} autoRotate/>

        <Suspense fallback={null}>
          <FirstScene />
        </Suspense>
        
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} color="pink" />
      </Canvas>
    </div>
  );
}

export default App;
