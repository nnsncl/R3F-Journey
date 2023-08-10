import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';

export const ExplodingMesh = () => {
    return (
        <React.Fragment>
            <Canvas
                gl={{
                    antialias: true
                }}
                camera={{
                    fov: 50,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 5]
                }}
            >
                <Experience />
            </Canvas>
        </React.Fragment>

    );
};
