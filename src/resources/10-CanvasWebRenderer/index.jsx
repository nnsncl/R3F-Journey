import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';
import { Leva } from "leva";

export const HTMLRenderer = () => {
    return (
        <React.Fragment>
            <Leva collapsed />
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 3]
                }}
            >
                <Experience />
            </Canvas>
        </React.Fragment>

    );
};
