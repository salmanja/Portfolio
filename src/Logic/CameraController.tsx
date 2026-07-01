import type { CameraControllerProps} from "../Types/types";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

export default function CameraController({horseRef}:CameraControllerProps) {
    useFrame((state,delta)=>{
        const horsePosition = horseRef.current?.position;
        if(!horsePosition) return;

        const currentX = horsePosition.x;
        const currentY = horsePosition.y;
        const currentZ = horsePosition.z;
        
        const targetX = currentX;
        const targetY = currentY + 3;
        const targetZ = currentZ + 10;

        easing.damp3(state.camera.position, [targetX, targetY, targetZ], 0.25, delta);

        state.camera.lookAt(horsePosition); 
    })
return null;
}