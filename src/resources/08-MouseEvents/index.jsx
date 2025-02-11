import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from './Experience';
import { Leva } from "leva";

export const MouseEvents = () => {
    return (
        <React.Fragment>
            <Leva collapsed />
            <Canvas
                onPointerMissed={() => console.log('Event Outside Canvas geometries')}
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
