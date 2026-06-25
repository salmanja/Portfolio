import {  useGLTF } from "@react-three/drei";
//import environment later to play with lighting and shadows

export default function Landscape() {
const {scene} = useGLTF("./environment/forest.glb");

  return (
  
  <primitive object={scene} position={[0, 15,0]}/>


);

}
