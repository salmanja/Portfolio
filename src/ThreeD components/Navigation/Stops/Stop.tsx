import type { StopProps } from "../../../Types/types";
import { forwardRef} from 'react';

const Stop = forwardRef(({ visitStop, id, position}: StopProps, ref) => {
return (
  <>
    <ambientLight />
    <pointLight position={[10, 10, 10]} intensity={1.5} />
    <mesh
      onClick={() => visitStop(id)}
      rotation={[0, 10, 0]}
      position={position}
      key={id}
      ref={ref}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="yellow" />
    </mesh>
  </>
);
})

export default Stop;