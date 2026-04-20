import { useGLTF } from "@react-three/drei";
import type { HorseProps } from "../../Types/types";
import { forwardRef} from 'react';


 const Horse = forwardRef(({ horsePosition }: HorseProps, ref) => {
  const { scene } = useGLTF('./public/models/horse.glb');

  return <primitive ref={ref} object={scene} position={[horsePosition.x, horsePosition.y, horsePosition.z]} />;
})
export default Horse;
