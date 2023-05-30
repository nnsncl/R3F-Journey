import React from "react";
import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
    return (
        <React.Fragment>
            <OrbitControls makeDefault />

            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <mesh position={[0, 0, 0]} scale={1.5} >
                <boxGeometry />
                <meshBasicMaterial />
            </mesh>
        </React.Fragment>
    );
};
