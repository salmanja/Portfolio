import type { StopProps} from "../../../Types/types"

export default function TroughStop({ visitStop }: StopProps) {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <mesh onClick={() => visitStop("skills")} rotation={[0, 10, 0]} position={[2,-0.5,0.5]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
    </>
  );
}
