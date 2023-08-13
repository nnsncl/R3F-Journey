import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './components/Experience';
import { ScrollControls } from "@react-three/drei";

export const ExplodingMesh = () => {
    return (
        <React.Fragment>
            <Canvas
                shadows
                gl={{ antialias: true }}
                camera={{ position: [0, 0, 5], fov: 30 }}
            >

                <ScrollControls pages={4} >
                    <Experience />
                </ScrollControls>
            </Canvas>
        </React.Fragment>

    );
};
