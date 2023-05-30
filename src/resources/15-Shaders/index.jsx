import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';

export const Shaders = () => {
    return (
        <React.Fragment>
            <Canvas
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
