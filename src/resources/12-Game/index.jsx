import React from "react";
import { Leva } from "leva";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Experience } from './Experience';
import { Interface } from "./Interface";

export const Game = () => {
    return (
        <React.Fragment>
            <KeyboardControls
                map={[
                    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
                    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
                    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
                    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
                    { name: 'jump', keys: ['Space'] }
                ]}
            >
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
                <Interface />
            </KeyboardControls>
        </React.Fragment>
    );
};
