import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';
import * as THREE from 'three';

export const Basics = () => {
    /**
     * In order to enabled R3F hooks, components muist be wrapped into the
     * Canvas element
     */

    const cameraSettings = {
        fov: 45,
        // zoom: 100,
        near: 0.1,
        far: 200,
        position: [1, 2, 6]
    }
    const glSettings = {
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding
    }
    return (
        <Canvas
            dpr={[1, 2]} // Clamped Pixel ratio
            camera={cameraSettings}
            gl={glSettings}
        >
            <Experience />
        </Canvas>
    );
};
