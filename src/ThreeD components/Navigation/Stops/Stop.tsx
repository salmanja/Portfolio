import type { StopProps } from "../../../Types/types";

export default function Stop ({ visitStop, id, position}: StopProps) {
return (
  <>
    <ambientLight />
    <pointLight position={[10, 10, 10]} intensity={1.5} />
    <mesh
      onClick={() => visitStop(id)}
      rotation={[0, 10, 0]}
      position={position}
      key={id}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="yellow" />
    </mesh>
  </>
);

}
