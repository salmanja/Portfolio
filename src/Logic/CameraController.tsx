import type { CameraControllerProps } from "../Types/types";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

export default function CameraController({ horseRef }: CameraControllerProps) {
  useFrame((state, delta) => {
    const horse = horseRef.current?.position;
    if (!horse) return;

    easing.damp3(state.camera.position, [horse.x, 4, 14], 0.25, delta);
    state.camera.lookAt(horse.x, -1, -8);
  });

  return null;
}
