import { useGLTF } from "@react-three/drei";

function FirstScene(){
    const {scene} = useGLTF('/models/shiba.glb')

    return (
        <primitive object={scene} scale={1} position={[0, 0, 0]} />
    )
}

export default FirstScene;