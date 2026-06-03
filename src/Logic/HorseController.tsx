import { useFrame } from "@react-three/fiber";
import type { HorseControllerProps } from "../Types/types";

export default function HorseController({
  keys,
  horseRef,
}: HorseControllerProps) {
  useFrame((_state, delta) => {
    const horsePosition = horseRef.current?.position;
    const horseRotation = horseRef.current?.rotation;
    if (!horsePosition || !horseRotation) return;

    const speed = 2 * delta;

    if (keys.current.has("ArrowUp")) {
      horsePosition.z -= speed;
      horseRotation.y = Math.PI;
    }
    if (keys.current.has("ArrowDown")) {
      horsePosition.z += speed;
      horseRotation.y = 2 * Math.PI;
    }
    if (keys.current.has("ArrowLeft")) {
      horsePosition.x -= speed;
      horseRotation.y = (3 * Math.PI) / 2; 
    }
    if (keys.current.has("ArrowRight")) {
      horsePosition.x += speed;
      horseRotation.y = Math.PI / 2;
    }
  });

  return null;
}
