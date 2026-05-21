import { useFrame } from "@react-three/fiber";
import type { HorseControllerProps } from "../Types/types";

export default function HorseController({
  // setHorsePosition,
  // setHorseRotation,
  keys,
  horseRef,
}: HorseControllerProps) {
  useFrame((_state, delta) => {
    const horsePosition = horseRef.current?.position;
    const horseRotation = horseRef.current?.rotation;
    if (!horsePosition || !horseRotation) return;

    const speed = 5 * delta;

    if (keys.has("ArrowUp")) {
      horsePosition.z -= speed;
      horseRotation.y = Math.PI;

      // setHorsePosition((prev) => ({ ...prev, z: prev.z - 0.1 }));
      // setHorseRotation((prev) => ({ ...prev, y: Math.PI }));
    }
    if (keys.has("ArrowDown")) {
      horsePosition.z += speed;
      horseRotation.y = 2 * Math.PI;

      // setHorsePosition((prev) => ({ ...prev, z: prev.z + 0.1 }));
      // setHorseRotation((prev) => ({ ...prev, y: 2 * Math.PI }));
    }
    if (keys.has("ArrowLeft")) {
      horsePosition.x -= speed;
      horseRotation.y = (3 * Math.PI) / 2; 

      // setHorsePosition((prev) => ({ ...prev, x: prev.x - 0.1 }));
      // setHorseRotation((prev) => ({ ...prev, y: (3 * Math.PI) / 2 }));
    }
    if (keys.has("ArrowRight")) {
      horsePosition.x += speed;
      horseRotation.y = Math.PI / 2; 

      // setHorsePosition((prev) => ({ ...prev, x: prev.x + 0.1 }));
      // setHorseRotation((prev) => ({ ...prev, y: Math.PI / 2 }));
    }
  });

  return null;
}
