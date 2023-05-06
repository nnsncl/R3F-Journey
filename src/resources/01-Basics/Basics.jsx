import React from "react";
import { Canvas } from "@react-three/fiber";

export const Basics = () => {
    return (
        <Canvas>
            <mesh>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
        </Canvas>
    );
};
