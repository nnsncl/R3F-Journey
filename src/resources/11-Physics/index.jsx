import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';
import { Leva } from "leva";

export const Physics = () => {
    return (
        <React.Fragment>
            <Leva collapsed />
            <Canvas
                shadows
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
