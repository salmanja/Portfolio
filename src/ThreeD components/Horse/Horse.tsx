import { useGLTF } from "@react-three/drei";


export default function Horse() {
  const { scene } = useGLTF('./public/models/horse.glb');

  return <primitive object={scene} />;
}
