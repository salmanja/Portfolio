import { useGLTF } from "@react-three/drei";
import type { HorseProps } from "../../Types/types";
import { forwardRef} from 'react';


const Horse = forwardRef(({ horsePosition, horseRotation }: HorseProps, ref) => {
  const { scene } = useGLTF('./models/anim-horse.glb');

  return <primitive ref={ref} object={scene} position={[horsePosition.x, horsePosition.y, horsePosition.z]} rotation={[horseRotation.x, horseRotation.y, horseRotation.z]} />;
})
export default Horse;
