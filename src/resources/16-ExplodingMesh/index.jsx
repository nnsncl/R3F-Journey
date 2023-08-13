import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';

export const ExplodingMesh = () => {
    return (
        <React.Fragment>
            <Canvas
                shadows
                gl={{ antialias: true }}
                camera={{ position: [3, 3, 3], fov: 30 }}
            >
                <Experience />
            </Canvas>
        </React.Fragment>

    );
};
