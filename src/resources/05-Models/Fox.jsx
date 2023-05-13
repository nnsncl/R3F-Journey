import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

export function Fox(props) {
    const model = useGLTF("./models/Fox/glTF/Fox.gltf");
    const animations = useAnimations(model.animations, model.scene);

    const { animate } = useControls('Fox', {
        animate: {
            options: animations.names
        },
    })

    React.useEffect(() => {
        const action = animations.actions
        action[animate].reset().fadeIn(0.5).play()

        return () => {
            action[animate].fadeOut(0.5)
        }
    }, [animate])


    return <primitive object={model.scene} {...props} />
}
useGLTF.preload("./models/Fox/glTF/Fox.gltf");