import React from "react";
import { useFrame } from "@react-three/fiber";

export const Lights = () => {
    const dirLightRef = React.useRef()

    useFrame((state) => {
        dirLightRef.current.position.z = state.camera.position.z + 1 - 4
        dirLightRef.current.target.position.z = state.camera.position.z - 4
        dirLightRef.current.target.updateMatrixWorld()
    })
    return (
        <React.Fragment>
            <directionalLight
                ref={dirLightRef}
                castShadow
                position={[4, 4, 1]}
                intensity={1.5}
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={1}
                shadow-camera-far={10}
                shadow-camera-top={10}
                shadow-camera-right={10}
                shadow-camera-bottom={-10}
                shadow-camera-left={-10}
            />
            <ambientLight intensity={0.5} />
        </React.Fragment>
    );
};
