import React from "react";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

import { Experience } from './Experience';
import { Interface } from "./Interface";

export const Configurator = () => {
    const glSettings = {
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding
    }
    return (
        <React.Fragment>
            <React.Suspense fallback={null}>
                <Interface />
                <Canvas shadows camera={{ fov: 45, position: [-1, 0, 0] }} gl={glSettings}>
                    <Experience />
                </Canvas>
            </React.Suspense>
            <Loader
                containerStyles={{ background: '#FFFFFF' }}
                dataStyles={{ color: '#0E0E0E' }}
            />
        </React.Fragment>

    );
};
