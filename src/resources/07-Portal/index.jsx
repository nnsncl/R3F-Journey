import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';
import { Leva } from "leva";

export const Portal = () => {
    return (
        <React.Fragment>
            <Leva collapsed />
            <Canvas
                flat // Fixes R3F default color encoding
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [- 4, 3, 6]
                }}
            >
                <Experience />
            </Canvas>
        </React.Fragment>

    );
};
