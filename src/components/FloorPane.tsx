import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloorPane() {
  const scroll = useScroll();
  const planeRef = useRef<THREE.Mesh | null>(null);
  const { camera } = useThree();

  useFrame(() => {
    const offset = scroll.offset;

    const cameraDirection = new THREE.Vector3();
    camera.getWorldDirection(cameraDirection);

    const moveDistance = offset * 10;

    const plane = planeRef.current;
    if (!plane) return;

    const target = camera.position
      .clone()
      .add(cameraDirection.multiplyScalar(moveDistance));
      //-moveDistance for the horse model
      target.y = -1;
      plane.position.lerp(target, 0.5);
  });

  return (
    <mesh
      ref={planeRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, 0]}
      scale={[0.5, 2.0, 1.0]}
      receiveShadow
    >
      <planeGeometry args={[5, 10]} />
      <meshStandardMaterial color="#303b00" />
    </mesh>
  );
}
export default FloorPane;
