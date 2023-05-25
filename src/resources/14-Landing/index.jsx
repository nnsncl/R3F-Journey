import React from "react";
import { sRGBEncoding, ACESFilmicToneMapping } from 'three'
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';
import { Leva } from "leva";

export const Landing = () => {

    return (
        <React.Fragment>
            <Leva collapsed />
            <Canvas
                shadows
                gl={{
                    antialias: true,
                    toneMapping: ACESFilmicToneMapping,
                    outputEncoding: sRGBEncoding
                }}
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
