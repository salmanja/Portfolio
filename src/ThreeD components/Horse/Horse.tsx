import { useGLTF } from "@react-three/drei";
import { forwardRef} from 'react';


const Horse = forwardRef(( _props, ref) => {
  const { scene } = useGLTF('./models/anim-horse.glb');

  return <primitive ref={ref} object={scene} position={[0, -1, 0]} />;
})
export default Horse;
