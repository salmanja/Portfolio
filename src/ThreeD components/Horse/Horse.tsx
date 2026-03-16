import { useGLTF } from "@react-three/drei";
import type { HorseProps } from "../../Types/types";


export default function Horse({ horsePosition }: HorseProps) {
  const { scene } = useGLTF('./public/models/horse.glb');

  return <primitive object={scene} position={[horsePosition.x, horsePosition.y, horsePosition.z]} />;
}
