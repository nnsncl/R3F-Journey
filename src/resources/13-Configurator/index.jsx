import React from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

import { Experience } from './scene/Experience.jsx';
import { Interface } from "./Interface.jsx";

export const Configurator = () => {
    return (
        <React.Fragment>
            <Interface />
            <Canvas shadows camera={{ fov: 45, position: [-1, 0, 0] }}>
                <React.Suspense fallback={null}>
                    <Experience />
                </React.Suspense>
            </Canvas>
            <Loader />
        </React.Fragment>

    );
};
