import { useFrame } from "@react-three/fiber";
import type { HorseControllerProps } from "../Types/types";

export default function HorseController({
  setHorsePosition,
  keys,
}: HorseControllerProps) {
  useFrame(() => {
    if (keys.has("ArrowUp")) {
      setHorsePosition((prev) => ({ ...prev, z: prev.z - 0.1 }));
    }
    if (keys.has("ArrowDown")) {
      setHorsePosition((prev) => ({ ...prev, z: prev.z + 0.1 }));
    }
    if (keys.has("ArrowLeft")) {
      setHorsePosition((prev) => ({ ...prev, x: prev.x - 0.1 }));
    }
    if (keys.has("ArrowRight")) {
      setHorsePosition((prev) => ({ ...prev, x: prev.x + 0.1 }));
    }
  });

  return null;
}
