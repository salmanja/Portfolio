import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

function MyAnimatedSphere() {
  useFrame(() => {
    // setup animation 
    console.log("Frame rendered");
  });

  return (
    <>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} color="pink" />
    </>
  );
};

function App() {
  return (
      <>
      <Canvas>
       <MyAnimatedSphere />
      </Canvas>
      </>
  );
}

export default App;
