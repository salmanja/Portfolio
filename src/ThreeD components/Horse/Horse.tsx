import { useGLTF, useAnimations } from "@react-three/drei";
import { forwardRef, useEffect } from "react";
import type { HorseProps } from "../../Types/types";

const Horse = forwardRef(({ isMoving }: HorseProps, ref) => {
  const { scene, animations } = useGLTF("./models/anim-horse.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const walkAction = actions["Horse_walk"];
    const idleAction = actions["Horse_idle.001"];

    if (!walkAction || !idleAction) return;


    if (isMoving) {
     walkAction.reset().setEffectiveTimeScale(0.5).setEffectiveWeight(1).fadeIn(0.2).play();
     idleAction.fadeOut(0.2).stop();

    } else {
      idleAction.reset().fadeIn(0.2).setEffectiveTimeScale(0.5).play();
      walkAction.fadeOut(0.2).stop();
    } 
    return ()=>{
      idleAction.fadeOut(0.2).stop();
      walkAction.fadeOut(0.2).stop();
    }
  }, [isMoving, actions]);

  return <primitive ref={ref} object={scene} position={[0, -1, 0]} />;
});
export default Horse;
