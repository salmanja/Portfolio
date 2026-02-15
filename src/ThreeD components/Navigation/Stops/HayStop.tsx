import type { StopProps} from "../../../Types/types"

export default function HayStop({ visitStop }: StopProps) {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <mesh onClick={visitStop} rotation={[0, 10, 0]} position={[-2,0,0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="yellow" />
      </mesh>
    </>
  );
}
