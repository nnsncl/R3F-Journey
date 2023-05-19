import React from "react";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from './Experience';

export const HTMLRenderer = () => {
    return (
        <React.Fragment>

            <Canvas
                style={{
                    pointerEvents: 'none',
                    touchAction: 'none'
                }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 3]
                }}
            >
                <Leva collapsed hidden />
                <React.Suspense fallback={null}>
                    <Experience />
                </React.Suspense>
            </Canvas>
            <Loader />
        </React.Fragment>

    );
};
