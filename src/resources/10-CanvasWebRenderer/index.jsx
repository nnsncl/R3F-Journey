import React from "react";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from './Experience';

export const HTMLRenderer = () => {
    return (
        <React.Fragment>
            <nav style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                color: 'white',
                zIndex: 10,
                padding: 24
            }} >
                <small style={{ opacity: 0.3 }} >@nuniro - r3f Journey</small>
            </nav>
            <Canvas
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
