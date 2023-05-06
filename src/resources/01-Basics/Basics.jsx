import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';

export const Basics = () => {
    /**
     * In order to enabled R3F hooks, components muist be wrapped into the
     * Canvas element
     */
    return (
        <Canvas>
            <Experience />
        </Canvas>
    );
};
