import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { OrbitControls, OrthographicCamera} from '@react-three/drei'

// function MyAnimatedSphere() {
//   useFrame(() => {
//     // setup orbit controls animation 
//     console.log("Frame rendered");
//   });

//   return (
//     <>
//       <mesh>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial />
//       </mesh>
//       <ambientLight intensity={0.1} />
//       <directionalLight position={[0, 0, 5]} color="pink" />
//     </>
//   );
// };

function App() {
const [isDragging, setIsDragging] = useState(false);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        {/* setup the orthographic default camera */}
        <OrthographicCamera 
        makeDefault
        position={[0, 40, 200]}
        zoom={1}
        left={-5}
        right={5}
        top={5}
        bottom={-5}
        />
        {/* orbit controls for mouse control */}
        <OrbitControls
        minZoom={10}
        maxZoom={50}
        enabled={!isDragging}
        />
        <mesh>
          <boxGeometry args={[2,2,2]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} color="pink" />
      </Canvas>
    </div>
  );
}

export default App;
