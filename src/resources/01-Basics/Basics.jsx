import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';

export const Basics = () => {
    /**
     * In order to enabled R3F hooks, components muist be wrapped into the
     * Canvas element
     */

    const cameraSettings = {
        fov: 45,
        // zoom: 100,
        near: 0.1,
        far: 200,
        position: [1, 2, 6]
    }

    return (
        <Canvas camera={cameraSettings} >
            <Experience />
        </Canvas>
    );
};
