import { useGLTF, useAnimations } from "@react-three/drei";
import { forwardRef, useEffect, useLayoutEffect } from "react";
import type { Group } from "three";
import type { HorseProps } from "../../Types/types";

const Horse = forwardRef<Group, HorseProps>(({ isMoving }, ref) => {
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

    return () => {
      idleAction.fadeOut(0.2).stop();
      walkAction.fadeOut(0.2).stop();
    };
  }, [isMoving, actions]);

  useLayoutEffect(() => {
    if (typeof ref === "function") return;
    ref?.current?.position.set(0, -1, 0);
  }, [ref]);

  return (
    <group ref={ref} scale={1.75}>
      <primitive object={scene} />
    </group>
  );
});

Horse.displayName = "Horse";
export default Horse;
