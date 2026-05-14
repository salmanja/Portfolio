import { useGLTF } from "@react-three/drei";
import type { HorseProps } from "../../Types/types";
import { forwardRef} from 'react';


const Horse = forwardRef(({ horsePosition }: HorseProps, ref) => {
//add a useFrame and lerp to create smooth movement of the horse based on the horsePosition prop

  const { scene } = useGLTF('./public/models/horse.glb');

  return <primitive ref={ref} object={scene} position={[horsePosition.x, horsePosition.y, horsePosition.z]} />;
})
export default Horse;
