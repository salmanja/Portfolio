import { useFrame } from "@react-three/fiber";
import type { HorseControllerProps } from "../Types/types";


export default function HorseController({
  setHorsePosition, setHorseRotation,
  keys,
}: HorseControllerProps) {
  useFrame(() => {
    if (keys.has("ArrowUp")) {
      setHorsePosition((prev) => ({ ...prev, z: prev.z - 0.1 }));
      setHorseRotation((prev)=>({...prev, y: Math.PI}));
    }
    if (keys.has("ArrowDown")) {
      setHorsePosition((prev) => ({ ...prev, z: prev.z + 0.1 }));
      setHorseRotation((prev)=>({...prev, y: 2*Math.PI}));
    }
    if (keys.has("ArrowLeft")) {
      setHorsePosition((prev) => ({ ...prev, x: prev.x - 0.1 }));
      setHorseRotation((prev) => ({ ...prev, y: (3 * Math.PI) / 2 }));
    }
    if (keys.has("ArrowRight")) {
      setHorsePosition((prev) => ({ ...prev, x: prev.x + 0.1 }));
      setHorseRotation((prev) => ({ ...prev, y: Math.PI / 2 }));
    }
  });

  return null;
}
