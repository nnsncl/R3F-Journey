import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';

export const Basics = () => {
    /**
     * In order to enabled R3F hooks, components muist be wrapped into the
     * Canvas element
     */
    return (
        <Canvas
            orthographic
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [1, 2, 6]
            }} >
            <Experience />
        </Canvas>
    );
};
